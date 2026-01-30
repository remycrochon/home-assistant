import time

from .const.const import (
    PROPERTY_POOL_CONTROL_REMAINING,
)


class CryptoInfoAdvFetchProp:
    def __init__(self, slug, parent_sensor=None):
        self._slug = slug
        self._name = self._build_name(parent_sensor)
        self._id_slug = self._build_id_slug(parent_sensor)

    def _build_name(self, parent_sensor):
        return self._slug.replace("_", " ").title()

    def _build_id_slug(self, parent_sensor):
        split_slug = self._slug.split("_")

        if parent_sensor is not None:
            id_prefix = parent_sensor.fetch_type.child_id_prefix

            if len(split_slug) > 1:
                return id_prefix + "".join([s[0] for s in split_slug[:-1]]) + split_slug[-1][:2]

            return id_prefix + split_slug[:3]

        elif len(split_slug) > 1:
            return self._slug[0] + split_slug[1][:2]

        return self._slug[:3]

    @property
    def slug(self):
        return self._slug

    @property
    def child_id_prefix(self):
        slug_split = self.slug.split("_")
        slug_abb = "".join([s[0] for s in slug_split])
        return f"es_{slug_abb}_"

    @property
    def id_slug(self):
        return self._id_slug

    @property
    def name(self):
        return self._name

    def __repr__(self):
        return self._slug

    def __hash__(self):
        return hash(self._slug)

    def __eq__(self, other):
        try:
            return self.slug == other.slug
        except Exception:
            return self.slug == str(other)

    def __lt__(self, other):
        try:
            return self.slug < other.slug
        except Exception:
            return self.slug < str(other)


class CryptoInfoAdvDataFetchType:
    PRICE_MAIN = CryptoInfoAdvFetchProp("price_main")
    PRICE_SIMPLE = CryptoInfoAdvFetchProp("price_simple")
    DOMINANCE = CryptoInfoAdvFetchProp("dominance")
    CHAIN_SUMMARY = CryptoInfoAdvFetchProp("chain_summary")
    CHAIN_CONTROL = CryptoInfoAdvFetchProp("chain_control")
    CHAIN_ORPHANS = CryptoInfoAdvFetchProp("chain_orphans")
    CHAIN_BLOCK_TIME = CryptoInfoAdvFetchProp("chain_block_time")
    NOMP_POOL_STATS = CryptoInfoAdvFetchProp("nomp_pool_stats")
    MEMPOOL_STATS = CryptoInfoAdvFetchProp("mempool_stats")
    MEMPOOL_FEES = CryptoInfoAdvFetchProp("mempool_fees")
    MEMPOOL_NEXT_BLOCK = CryptoInfoAdvFetchProp("mempool_next_block")


class CryptoInfoAdvEntityManager:
    _instance = None

    def __init__(self):
        self._entities = dict()
        self._child_entities = dict()
        self._api_data = dict()
        self._fetch_frequency = dict()
        self._last_fetch = dict()
        self._extra_sensor_types = list()
        self._hashrate_sources = dict()
        self._block_time_sources = dict()
        self._last_diff_sources = dict()
        self._hash_control_sources = dict()

    @property
    def fetch_types(self):
        return [
            CryptoInfoAdvDataFetchType.PRICE_MAIN,
            CryptoInfoAdvDataFetchType.PRICE_SIMPLE,
            CryptoInfoAdvDataFetchType.DOMINANCE,
            CryptoInfoAdvDataFetchType.CHAIN_SUMMARY,
            CryptoInfoAdvDataFetchType.CHAIN_CONTROL,
            CryptoInfoAdvDataFetchType.CHAIN_ORPHANS,
            CryptoInfoAdvDataFetchType.CHAIN_BLOCK_TIME,
            CryptoInfoAdvDataFetchType.NOMP_POOL_STATS,
            CryptoInfoAdvDataFetchType.MEMPOOL_STATS,
            CryptoInfoAdvDataFetchType.MEMPOOL_FEES,
            CryptoInfoAdvDataFetchType.MEMPOOL_NEXT_BLOCK,
        ]

    @property
    def fetch_market_cap_types(self):
        return [
            CryptoInfoAdvDataFetchType.PRICE_MAIN,
            CryptoInfoAdvDataFetchType.PRICE_SIMPLE,
            CryptoInfoAdvDataFetchType.DOMINANCE,
        ]

    @property
    def fetch_supply_types(self):
        return [
            CryptoInfoAdvDataFetchType.PRICE_MAIN,
            CryptoInfoAdvDataFetchType.CHAIN_SUMMARY,
        ]

    @property
    def fetch_price_types(self):
        return [
            CryptoInfoAdvDataFetchType.PRICE_MAIN,
            CryptoInfoAdvDataFetchType.PRICE_SIMPLE,
        ]

    @property
    def fetch_time_types(self):
        return [
            CryptoInfoAdvDataFetchType.CHAIN_BLOCK_TIME,
        ]

    @property
    def fetch_block_height_types(self):
        return [
            CryptoInfoAdvDataFetchType.NOMP_POOL_STATS,
            CryptoInfoAdvDataFetchType.CHAIN_BLOCK_TIME,
        ]

    @property
    def fetch_hashrate_types(self):
        return [
            CryptoInfoAdvDataFetchType.NOMP_POOL_STATS,
            CryptoInfoAdvDataFetchType.CHAIN_SUMMARY,
        ]

    @property
    def fetch_shared_types(self):
        return [
            CryptoInfoAdvDataFetchType.DOMINANCE,
            CryptoInfoAdvDataFetchType.CHAIN_SUMMARY,
            CryptoInfoAdvDataFetchType.CHAIN_CONTROL,
        ]

    @property
    def fetch_mempool_types(self):
        return [
            CryptoInfoAdvDataFetchType.MEMPOOL_STATS,
            CryptoInfoAdvDataFetchType.MEMPOOL_FEES,
            CryptoInfoAdvDataFetchType.MEMPOOL_NEXT_BLOCK,
        ]

    def get_extra_sensor_fetch_type_from_str(self, parent_sensor, attribute_key):
        for t in self._extra_sensor_types:
            if t == attribute_key:
                return t

        t = CryptoInfoAdvFetchProp(attribute_key, parent_sensor=parent_sensor)
        self._extra_sensor_types.append(t)
        return t

    def get_fetch_type_from_str(self, fetch_type):
        if isinstance(fetch_type, CryptoInfoAdvFetchProp):
            return fetch_type

        for t in self.fetch_types:
            if t == fetch_type:
                return t

        return CryptoInfoAdvDataFetchType.PRICE_MAIN

    @classmethod
    def instance(cls):
        if cls._instance is None:
            cls._instance = cls()
        return cls._instance

    def add_entities(self, entities):
        for entity in entities:

            if not entity.is_child_sensor:
                self._entities[entity.unique_id] = entity

                entity_data_key = self.get_entity_data_key(entity)

                current_frequency = self._fetch_frequency.get(entity_data_key)

                if current_frequency is None or entity.update_frequency < current_frequency:
                    self._fetch_frequency[entity_data_key] = entity.update_frequency

                if entity.fetch_type in self.fetch_hashrate_types:
                    if entity.cryptocurrency_name not in self._hashrate_sources:
                        self._hashrate_sources[entity.cryptocurrency_name] = dict()

                    self._hashrate_sources[entity.cryptocurrency_name][entity.fetch_type] = entity.unique_id

                if entity.fetch_type == CryptoInfoAdvDataFetchType.CHAIN_BLOCK_TIME:
                    self._block_time_sources[entity.cryptocurrency_name] = entity.unique_id

                if entity.fetch_type == CryptoInfoAdvDataFetchType.CHAIN_SUMMARY:
                    self._last_diff_sources[entity.cryptocurrency_name] = entity.unique_id

                if entity.fetch_type == CryptoInfoAdvDataFetchType.CHAIN_CONTROL:
                    if entity.cryptocurrency_name not in self._hash_control_sources:
                        self._hash_control_sources[entity.cryptocurrency_name] = set()
                    if PROPERTY_POOL_CONTROL_REMAINING not in entity.pool_prefixes:
                        self._hash_control_sources[entity.cryptocurrency_name].add(entity.unique_id)
            else:
                self._child_entities[entity.unique_id] = entity

    def get_last_fetch(self, fetch_type):
        return self._last_fetch.get(fetch_type, 0)

    def get_fetch_frequency(self, fetch_type):
        tdelta = self._fetch_frequency.get(fetch_type)
        return tdelta.seconds if tdelta else 0

    def get_remaining_hash_control(self, cryptocurrency_name):
        if cryptocurrency_name not in self._hash_control_sources:
            return (None, None)

        sensor_found = False
        known_hash_control_100 = 0
        known_hash_control_1000 = 0

        for entity_id in self._hash_control_sources[cryptocurrency_name]:
            source = self._entities[entity_id]

            if source.state is None:
                continue

            sensor_found = True

            known_hash_control_100 += int(source.state)

            if source._pool_control_1000b is not None:
                known_hash_control_1000 += int(source._pool_control_1000b)

        if not sensor_found:
            return (None, None)

        return (int(100 - known_hash_control_100), int(1000 - known_hash_control_1000))

    def get_best_hashrate(self, cryptocurrency_name):
        if cryptocurrency_name not in self._hashrate_sources:
            return None

        hashrates = list()
        for t, entity_id in self._hashrate_sources[cryptocurrency_name].items():

            source = self._entities[entity_id]

            if source.hashrate is not None:
                hashrates.append(source.hashrate)

        return max(hashrates)

    def get_block_time(self, cryptocurrency_name):
        if cryptocurrency_name not in self._block_time_sources:
            return None

        entity_id = self._block_time_sources[cryptocurrency_name]

        source = self._entities[entity_id]

        if source.state is not None:
            return source.state

        return None

    def get_last_diff(self, cryptocurrency_name):
        if cryptocurrency_name not in self._last_diff_sources:
            return None

        entity_id = self._last_diff_sources[cryptocurrency_name]

        source = self._entities[entity_id]

        if source.difficulty_previous_target_height is not None:
            return source.difficulty_previous_target_height

        return None

    def should_fetch_entity(self, entity):
        if entity.fetch_type not in self.fetch_shared_types:
            return True

        entity_data_key = self.get_entity_data_key(entity)

        if entity_data_key not in self._api_data:
            return True

        if self._api_data[entity_data_key] is None:
            return True

        last_fetch = self.get_last_fetch(entity_data_key)
        if last_fetch + self.get_fetch_frequency(entity_data_key) < int(time.time()):
            return True

        return False

    def get_entity_data_key(self, entity):
        if entity.fetch_type == CryptoInfoAdvDataFetchType.CHAIN_CONTROL:
            return f"{entity.fetch_type}_{entity.cryptocurrency_name}"
        else:
            return f"{entity.fetch_type}"

    def set_cached_entity_data(self, entity, data):
        if entity.fetch_type not in self.fetch_shared_types:
            return

        entity_data_key = self.get_entity_data_key(entity)

        self._api_data[entity_data_key] = data
        self._last_fetch[entity_data_key] = int(time.time())

    def fetch_cached_entity_data(self, entity):
        entity_data_key = self.get_entity_data_key(entity)
        return self._api_data[entity_data_key]
