import logging
from homeassistant.const import Platform

DOMAIN = "cryptoinfo_advanced"
PLATFORMS = [
    Platform.SENSOR,
]

CONF_CRYPTOCURRENCY_NAME = "cryptocurrency_name"
CONF_CURRENCY_NAME = "currency_name"
CONF_MULTIPLIER = "multiplier"
CONF_UPDATE_FREQUENCY = "update_frequency"
CONF_API_MODE = "api_mode"
CONF_POOL_PREFIX = "pool_prefix"
CONF_FETCH_ARGS = "fetch_args_template"
CONF_EXTRA_SENSORS = "extra_sensors"
CONF_EXTRA_SENSOR_PROPERTY = "property"
CONF_API_DOMAIN_NAME = "api_domain_name"
CONF_POOL_NAME = "pool_name"
CONF_DIFF_MULTIPLIER = "diff_multiplier"
CONF_BLOCK_TIME_MINUTES = "block_time_minutes"
CONF_DIFFICULTY_WINDOW = "difficulty_window"
CONF_HALVING_WINDOW = "halving_window"
CONF_MAX_FETCH_FAILURES = "max_fetch_failures"

SENSOR_PREFIX = "Cryptoinfo "
ATTR_LAST_UPDATE = "last_update"
ATTR_BASE_PRICE = "baseprice"
ATTR_24H_VOLUME = "24h_volume"
ATTR_1H_CHANGE = "1h_change"
ATTR_24H_CHANGE = "24h_change"
ATTR_7D_CHANGE = "7d_change"
ATTR_30D_CHANGE = "30d_change"
ATTR_MARKET_CAP = "market_cap"
ATTR_CIRCULATING_SUPPLY = "circulating_supply"
ATTR_TOTAL_SUPPLY = "total_supply"
ATTR_ALL_TIME_HIGH = "all_time_high"
ATTR_ALL_TIME_HIGH_DISTANCE = "all_time_high_distance"
ATTR_ALL_TIME_LOW = "all_time_low"
ATTR_24H_LOW = "24h_low"
ATTR_24H_HIGH = "24h_high"
ATTR_IMAGE_URL = "image_url"
ATTR_ALL_TIME_HIGH_DATE = "all_time_high_date"
ATTR_ALL_TIME_HIGH_DAYS = "all_time_high_days"
ATTR_ALL_TIME_LOW_DATE = "all_time_low_date"
ATTR_ALL_TIME_LOW_DAYS = "all_time_low_days"

ATTR_DIFFICULTY = "difficulty"
ATTR_DIFFICULTY_CALC = "difficulty_calc"
ATTR_HASHRATE = "hashrate"
ATTR_HASHRATE_CALC = "hashrate_calc"
ATTR_POOL_CONTROL_1000B = "pool_control_1000b"
ATTR_POOL_CONTROL_1000B_PERC = "pool_control_1000b_perc"
ATTR_BLOCK_HEIGHT = "block_height"

ATTR_DIFFICULTY_BLOCK_PROGRESS = "difficulty_block_progress"
ATTR_DIFFICULTY_RETARGET_HEIGHT = "difficulty_retarget_height"
ATTR_DIFFICULTY_RETARGET_SECONDS = "difficulty_retarget_seconds"
ATTR_DIFFICULTY_RETARGET_PERCENT_CHANGE = "difficulty_retarget_percent_change"
ATTR_DIFFICULTY_RETARGET_ESTIMATED_DIFF = "difficulty_retarget_estimated_diff"
ATTR_HALVING_BLOCK_PROGRESS = "halving_block_progress"
ATTR_HALVING_BLOCKS_REMAINING = "halving_blocks_remaining"
ATTR_NEXT_HALVING_HEIGHT = "next_halving_height"
ATTR_TOTAL_HALVINGS_TO_DATE = "total_halvings_to_date"

ATTR_WORKER_COUNT = "worker_count"
ATTR_LAST_BLOCK = "last_block"
ATTR_BLOCKS_PENDING = "blocks_pending"
ATTR_BLOCKS_CONFIRMED = "blocks_confirmed"
ATTR_BLOCKS_ORPHANED = "blocks_orphaned"

ATTR_BLOCK_TIME_IN_SECONDS = "block_time_in_seconds"

ATTR_MEMPOOL_TX_COUNT = "mempool_tx_count"
ATTR_MEMPOOL_TOTAL_FEE = "mempool_total_fee"
ATTR_MEMPOOL_TOTAL_FEE_CALC = "mempool_total_fee_calc"
ATTR_MEMPOOL_SIZE_CALC = "mempool_size_calc"
ATTR_MEMPOOL_AVERAGE_FEE_PER_TX = "mempool_average_fee_per_tx"
ATTR_MEMPOOL_FEES_FASTEST = "mempool_fees_fastest"
ATTR_MEMPOOL_FEES_30MIN = "mempool_fees_30min"
ATTR_MEMPOOL_FEES_60MIN = "mempool_fees_60min"
ATTR_MEMPOOL_FEES_ECO = "mempool_fees_eco"
ATTR_MEMPOOL_FEES_MINIMUM = "mempool_fees_minimum"
ATTR_MEMPOOL_NEXT_BLOCK_SIZE = "mempool_next_block_size"
ATTR_MEMPOOL_NEXT_BLOCK_SIZE_CALC = "mempool_next_block_size_calc"
ATTR_MEMPOOL_NEXT_BLOCK_TX_COUNT = "mempool_next_block_tx_count"
ATTR_MEMPOOL_NEXT_BLOCK_TOTAL_FEE = "mempool_next_block_total_fee"
ATTR_MEMPOOL_NEXT_BLOCK_TOTAL_FEE_CALC = "mempool_next_block_total_fee_calc"
ATTR_MEMPOOL_NEXT_BLOCK_MEDIAN_FEE = "mempool_next_block_median_fee"
ATTR_MEMPOOL_NEXT_BLOCK_FEE_RANGE_MIN = "mempool_next_block_fee_range_min"
ATTR_MEMPOOL_NEXT_BLOCK_FEE_RANGE_MAX = "mempool_next_block_fee_range_max"
ATTR_MEMPOOL_NEXT_BLOCK_FEE_RANGE_COMBINED = "mempool_next_block_fee_range_combined"

PROPERTY_POOL_CONTROL_REMAINING = "remaining_percentage"

API_BASE_URL_COINGECKO = "https://api.coingecko.com/api/v3/"
API_BASE_URL_CRYPTOID = "https://chainz.cryptoid.info/"
API_BASE_URL_MEMPOOLSPACE = "https://mempool.space/api/"

API_ENDPOINT_PRICE_MAIN = (
    "{0}coins/markets?ids={1}&vs_currency={2}"
    "&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d"
)
API_ENDPOINT_PRICE_ALT = (
    "{0}simple/price?ids={1}&vs_currencies={2}"
    "&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true"
)
API_ENDPOINT_DOMINANCE = "{0}global"
API_ENDPOINT_CHAIN_SUMMARY = "{0}explorer/api.dws?q=summary"
API_ENDPOINT_CHAIN_ORPHANS = "{0}explorer/index.orphans.dws?coin={1}"
API_ENDPOINT_CHAIN_CONTROL = "{0}explorer/index.pools.dws?coin={1}"
API_ENDPOINT_CHAIN_BLOCK_TIME = "{0}{1}/api.dws?q=getblocktime&height={2}"
API_ENDPOINT_NOMP_POOL_STATS = "https://{0}/api/stats"
API_ENDPOINT_MEMPOOL_STATS = "{0}mempool"
API_ENDPOINT_MEMPOOL_FEES = "{0}v1/fees/recommended"
API_ENDPOINT_MEMPOOL_NEXT_BLOCKS = "{0}v1/fees/mempool-blocks"

DAY_SECONDS = 60 * 60 * 24

DEFAULT_MAX_FETCH_FAILURES = 3

DEFAULT_CHAIN_DIFFICULTY_WINDOW = 2016
DEFAULT_CHAIN_DIFF_MULTIPLIER = 4294967296
DEFAULT_CHAIN_BLOCK_TIME_MINS = 10.0
DEFAULT_CHAIN_HALVING_WINDOW = 210000

_LOGGER = logging.getLogger(__name__)
