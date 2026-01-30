def unit_to_multiplier(unit_of_measurement):
    uom = str(unit_of_measurement).lower() if unit_of_measurement is not None else ""
    if uom.startswith("k"):
        return 1e3
    elif uom.startswith("m"):
        return 1e6
    elif uom.startswith("g"):
        return 1e9
    elif uom.startswith("t"):
        return 1e12
    elif uom.startswith("p"):
        return 1e15
    elif uom.startswith("e"):
        return 1e18
    elif uom.startswith("z"):
        return 1e21
    elif uom.startswith("y"):
        return 1e24
    elif uom.startswith("r"):
        return 1e27
    elif uom.startswith("q"):
        return 1e30
    else:
        return 1


def currency_to_multiplier(currency):
    coin = str(currency).lower() if currency is not None else ""
    if coin in ["btc", "bitcoin", "bitcoins", "₿"]:
        return 1e8
    else:
        return 1
