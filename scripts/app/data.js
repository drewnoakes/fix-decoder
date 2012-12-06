define(
    [
    ],
    function()
    {
        return {
            fieldById: {
                "1": {
                    "name": "Account",
                    "type": "STRING"
                },
                "2": {
                    "name": "AdvId",
                    "type": "STRING"
                },
                "3": {
                    "name": "AdvRefID",
                    "type": "STRING"
                },
                "4": {
                    "name": "AdvSide",
                    "type": "CHAR",
                    "values": {
                        "B": "BUY",
                        "S": "SELL",
                        "X": "CROSS",
                        "T": "TRADE"
                    }
                },
                "5": {
                    "name": "AdvTransType",
                    "type": "STRING",
                    "values": {
                        "N": "NEW",
                        "C": "CANCEL",
                        "R": "REPLACE"
                    }
                },
                "6": {
                    "name": "AvgPx",
                    "type": "PRICE"
                },
                "7": {
                    "name": "BeginSeqNo",
                    "type": "SEQNUM"
                },
                "8": {
                    "name": "BeginString",
                    "type": "STRING"
                },
                "9": {
                    "name": "BodyLength",
                    "type": "LENGTH"
                },
                "10": {
                    "name": "CheckSum",
                    "type": "STRING"
                },
                "11": {
                    "name": "ClOrdID",
                    "type": "STRING"
                },
                "12": {
                    "name": "Commission",
                    "type": "AMT"
                },
                "13": {
                    "name": "CommType",
                    "type": "CHAR",
                    "values": {
                        "1": "PER_UNIT",
                        "2": "PERCENTAGE",
                        "3": "ABSOLUTE",
                        "4": "PERCENTAGE_WAIVED_CASH_DISCOUNT",
                        "5": "PERCENTAGE_WAIVED_ENHANCED_UNITS",
                        "6": "POINTS_PER_BOND_OR_OR_CONTRACT"
                    }
                },
                "14": {
                    "name": "CumQty",
                    "type": "QTY"
                },
                "15": {
                    "name": "Currency",
                    "type": "CURRENCY"
                },
                "16": {
                    "name": "EndSeqNo",
                    "type": "SEQNUM"
                },
                "17": {
                    "name": "ExecID",
                    "type": "STRING"
                },
                "18": {
                    "name": "ExecInst",
                    "type": "MULTIPLEVALUESTRING",
                    "values": {
                        "1": "NOT_HELD",
                        "2": "WORK",
                        "3": "GO_ALONG",
                        "4": "OVER_THE_DAY",
                        "5": "HELD",
                        "6": "PARTICIPATE_DONT_INITIATE",
                        "7": "STRICT_SCALE",
                        "8": "TRY_TO_SCALE",
                        "9": "STAY_ON_BIDSIDE",
                        "0": "STAY_ON_OFFERSIDE",
                        "A": "NO_CROSS",
                        "B": "OK_TO_CROSS",
                        "C": "CALL_FIRST",
                        "D": "PERCENT_OF_VOLUME",
                        "E": "DO_NOT_INCREASE",
                        "F": "DO_NOT_REDUCE",
                        "G": "ALL_OR_NONE",
                        "H": "REINSTATE_ON_SYSTEM_FAILURE",
                        "I": "INSTITUTIONS_ONLY",
                        "J": "REINSTATE_ON_TRADING_HALT",
                        "K": "CANCEL_ON_TRADING_HALT",
                        "L": "LAST_PEG",
                        "M": "MID_PRICE",
                        "N": "NON_NEGOTIABLE",
                        "O": "OPENING_PEG",
                        "P": "MARKET_PEG",
                        "Q": "CANCEL_ON_SYSTEM_FAILURE",
                        "R": "PRIMARY_PEG",
                        "S": "SUSPEND",
                        "T": "FIXED_PEG_TO_LOCAL_BEST_BID_OR_OFFER_AT_TIME_OF_ORDER",
                        "U": "CUSTOMER_DISPLAY_INSTRUCTION",
                        "V": "NETTING",
                        "W": "PEG_TO_VWAP",
                        "X": "TRADE_ALONG",
                        "Y": "TRY_TO_STOP",
                        "Z": "CANCEL_IF_NOT_BEST",
                        "a": "TRAILING_STOP_PEG",
                        "b": "STRICT_LIMIT",
                        "c": "IGNORE_PRICE_VALIDITY_CHECKS",
                        "d": "PEG_TO_LIMIT_PRICE",
                        "e": "WORK_TO_TARGET_STRATEGY"
                    }
                },
                "19": {
                    "name": "ExecRefID",
                    "type": "STRING"
                },
                "21": {
                    "name": "HandlInst",
                    "type": "CHAR",
                    "values": {
                        "1": "AUTOMATED_EXECUTION_ORDER_PRIVATE",
                        "2": "AUTOMATED_EXECUTION_ORDER_PUBLIC",
                        "3": "MANUAL_ORDER"
                    }
                },
                "22": {
                    "name": "SecurityIDSource",
                    "type": "STRING",
                    "values": {
                        "1": "CUSIP",
                        "2": "SEDOL",
                        "3": "QUIK",
                        "4": "ISIN_NUMBER",
                        "5": "RIC_CODE",
                        "6": "ISO_CURRENCY_CODE",
                        "7": "ISO_COUNTRY_CODE",
                        "8": "EXCHANGE_SYMBOL",
                        "9": "CONSOLIDATED_TAPE_ASSOCIATION",
                        "A": "BLOOMBERG_SYMBOL",
                        "B": "WERTPAPIER",
                        "C": "DUTCH",
                        "D": "VALOREN",
                        "E": "SICOVAM",
                        "F": "BELGIAN",
                        "G": "COMMON",
                        "H": "CLEARING_HOUSE_CLEARING_ORGANIZATION",
                        "I": "ISDA_FPML_PRODUCT_SPECIFICATION",
                        "J": "OPTIONS_PRICE_REPORTING_AUTHORITY"
                    }
                },
                "23": {
                    "name": "IOIid",
                    "type": "STRING"
                },
                "25": {
                    "name": "IOIQltyInd",
                    "type": "CHAR",
                    "values": {
                        "L": "LOW",
                        "M": "MEDIUM",
                        "H": "HIGH"
                    }
                },
                "26": {
                    "name": "IOIRefID",
                    "type": "STRING"
                },
                "27": {
                    "name": "IOIQty",
                    "type": "STRING"
                },
                "28": {
                    "name": "IOITransType",
                    "type": "CHAR",
                    "values": {
                        "N": "NEW",
                        "C": "CANCEL",
                        "R": "REPLACE"
                    }
                },
                "29": {
                    "name": "LastCapacity",
                    "type": "CHAR",
                    "values": {
                        "1": "AGENT",
                        "2": "CROSS_AS_AGENT",
                        "3": "CROSS_AS_PRINCIPAL",
                        "4": "PRINCIPAL"
                    }
                },
                "30": {
                    "name": "LastMkt",
                    "type": "EXCHANGE"
                },
                "31": {
                    "name": "LastPx",
                    "type": "PRICE"
                },
                "32": {
                    "name": "LastQty",
                    "type": "QTY"
                },
                "33": {
                    "name": "LinesOfText",
                    "type": "NUMINGROUP"
                },
                "34": {
                    "name": "MsgSeqNum",
                    "type": "SEQNUM"
                },
                "35": {
                    "name": "MsgType",
                    "type": "STRING",
                    "values": {
                        "0": "HEARTBEAT",
                        "1": "TEST_REQUEST",
                        "2": "RESEND_REQUEST",
                        "3": "REJECT",
                        "4": "SEQUENCE_RESET",
                        "5": "LOGOUT",
                        "6": "INDICATION_OF_INTEREST",
                        "7": "ADVERTISEMENT",
                        "8": "EXECUTION_REPORT",
                        "9": "ORDER_CANCEL_REJECT",
                        "A": "LOGON",
                        "B": "NEWS",
                        "C": "EMAIL",
                        "D": "ORDER_SINGLE",
                        "E": "ORDER_LIST",
                        "F": "ORDER_CANCEL_REQUEST",
                        "G": "ORDER_CANCEL_REPLACE_REQUEST",
                        "H": "ORDER_STATUS_REQUEST",
                        "J": "ALLOCATION_INSTRUCTION",
                        "K": "LIST_CANCEL_REQUEST",
                        "L": "LIST_EXECUTE",
                        "M": "LIST_STATUS_REQUEST",
                        "N": "LIST_STATUS",
                        "P": "ALLOCATION_INSTRUCTION_ACK",
                        "Q": "DONT_KNOW_TRADE",
                        "R": "QUOTE_REQUEST",
                        "S": "QUOTE",
                        "T": "SETTLEMENT_INSTRUCTIONS",
                        "V": "MARKET_DATA_REQUEST",
                        "W": "MARKET_DATA_SNAPSHOT_FULL_REFRESH",
                        "X": "MARKET_DATA_INCREMENTAL_REFRESH",
                        "Y": "MARKET_DATA_REQUEST_REJECT",
                        "Z": "QUOTE_CANCEL",
                        "a": "QUOTE_STATUS_REQUEST",
                        "b": "MASS_QUOTE_ACKNOWLEDGEMENT",
                        "c": "SECURITY_DEFINITION_REQUEST",
                        "d": "SECURITY_DEFINITION",
                        "e": "SECURITY_STATUS_REQUEST",
                        "f": "SECURITY_STATUS",
                        "g": "TRADING_SESSION_STATUS_REQUEST",
                        "h": "TRADING_SESSION_STATUS",
                        "i": "MASS_QUOTE",
                        "j": "BUSINESS_MESSAGE_REJECT",
                        "k": "BID_REQUEST",
                        "l": "BID_RESPONSE",
                        "m": "LIST_STRIKE_PRICE",
                        "n": "XML_MESSAGE",
                        "o": "REGISTRATION_INSTRUCTIONS",
                        "p": "REGISTRATION_INSTRUCTIONS_RESPONSE",
                        "q": "ORDER_MASS_CANCEL_REQUEST",
                        "r": "ORDER_MASS_CANCEL_REPORT",
                        "s": "NEW_ORDER_CROSS",
                        "t": "CROSS_ORDER_CANCEL_REPLACE_REQUEST",
                        "u": "CROSS_ORDER_CANCEL_REQUEST",
                        "v": "SECURITY_TYPE_REQUEST",
                        "w": "SECURITY_TYPES",
                        "x": "SECURITY_LIST_REQUEST",
                        "y": "SECURITY_LIST",
                        "z": "DERIVATIVE_SECURITY_LIST_REQUEST",
                        "AA": "DERIVATIVE_SECURITY_LIST",
                        "AB": "NEW_ORDER_MULTILEG",
                        "AC": "MULTILEG_ORDER_CANCEL_REPLACE",
                        "AD": "TRADE_CAPTURE_REPORT_REQUEST",
                        "AE": "TRADE_CAPTURE_REPORT",
                        "AF": "ORDER_MASS_STATUS_REQUEST",
                        "AG": "QUOTE_REQUEST_REJECT",
                        "AH": "RFQ_REQUEST",
                        "AI": "QUOTE_STATUS_REPORT",
                        "AJ": "QUOTE_RESPONSE",
                        "AK": "CONFIRMATION",
                        "AL": "POSITION_MAINTENANCE_REQUEST",
                        "AM": "POSITION_MAINTENANCE_REPORT",
                        "AN": "REQUEST_FOR_POSITIONS",
                        "AO": "REQUEST_FOR_POSITIONS_ACK",
                        "AP": "POSITION_REPORT",
                        "AQ": "TRADE_CAPTURE_REPORT_REQUEST_ACK",
                        "AR": "TRADE_CAPTURE_REPORT_ACK",
                        "AS": "ALLOCATION_REPORT",
                        "AT": "ALLOCATION_REPORT_ACK",
                        "AU": "CONFIRMATION_ACK",
                        "AV": "SETTLEMENT_INSTRUCTION_REQUEST",
                        "AW": "ASSIGNMENT_REPORT",
                        "AX": "COLLATERAL_REQUEST",
                        "AY": "COLLATERAL_ASSIGNMENT",
                        "AZ": "COLLATERAL_RESPONSE",
                        "BA": "COLLATERAL_REPORT",
                        "BB": "COLLATERAL_INQUIRY",
                        "BC": "NETWORK_STATUS_REQUEST",
                        "BD": "NETWORK_STATUS_RESPONSE",
                        "BE": "USER_REQUEST",
                        "BF": "USER_RESPONSE",
                        "BG": "COLLATERAL_INQUIRY_ACK",
                        "BH": "CONFIRMATION_REQUEST"
                    }
                },
                "36": {
                    "name": "NewSeqNo",
                    "type": "SEQNUM"
                },
                "37": {
                    "name": "OrderID",
                    "type": "STRING"
                },
                "38": {
                    "name": "OrderQty",
                    "type": "QTY"
                },
                "39": {
                    "name": "OrdStatus",
                    "type": "CHAR",
                    "values": {
                        "0": "NEW",
                        "1": "PARTIALLY_FILLED",
                        "2": "FILLED",
                        "3": "DONE_FOR_DAY",
                        "4": "CANCELED",
                        "5": "REPLACED",
                        "6": "PENDING_CANCEL",
                        "7": "STOPPED",
                        "8": "REJECTED",
                        "9": "SUSPENDED",
                        "A": "PENDING_NEW",
                        "B": "CALCULATED",
                        "C": "EXPIRED",
                        "D": "ACCEPTED_FOR_BIDDING",
                        "E": "PENDING_REPLACE"
                    }
                },
                "40": {
                    "name": "OrdType",
                    "type": "CHAR",
                    "values": {
                        "1": "MARKET",
                        "2": "LIMIT",
                        "3": "STOP",
                        "4": "STOP_LIMIT",
                        "5": "MARKET_ON_CLOSE",
                        "6": "WITH_OR_WITHOUT",
                        "7": "LIMIT_OR_BETTER",
                        "8": "LIMIT_WITH_OR_WITHOUT",
                        "9": "ON_BASIS",
                        "A": "ON_CLOSE",
                        "B": "LIMIT_ON_CLOSE",
                        "C": "FOREX_MARKET",
                        "D": "PREVIOUSLY_QUOTED",
                        "E": "PREVIOUSLY_INDICATED",
                        "F": "FOREX_LIMIT",
                        "G": "FOREX_SWAP",
                        "H": "FOREX_PREVIOUSLY_QUOTED",
                        "I": "FUNARI",
                        "J": "MARKET_IF_TOUCHED",
                        "K": "MARKET_WITH_LEFTOVER_AS_LIMIT",
                        "L": "PREVIOUS_FUND_VALUATION_POINT",
                        "M": "NEXT_FUND_VALUATION_POINT",
                        "P": "PEGGED"
                    }
                },
                "41": {
                    "name": "OrigClOrdID",
                    "type": "STRING"
                },
                "42": {
                    "name": "OrigTime",
                    "type": "UTCTIMESTAMP"
                },
                "43": {
                    "name": "PossDupFlag",
                    "type": "BOOLEAN"
                },
                "44": {
                    "name": "Price",
                    "type": "PRICE"
                },
                "45": {
                    "name": "RefSeqNum",
                    "type": "SEQNUM"
                },
                "48": {
                    "name": "SecurityID",
                    "type": "STRING"
                },
                "49": {
                    "name": "SenderCompID",
                    "type": "STRING"
                },
                "50": {
                    "name": "SenderSubID",
                    "type": "STRING"
                },
                "52": {
                    "name": "SendingTime",
                    "type": "UTCTIMESTAMP"
                },
                "53": {
                    "name": "Quantity",
                    "type": "QTY"
                },
                "54": {
                    "name": "Side",
                    "type": "CHAR",
                    "values": {
                        "1": "BUY",
                        "2": "SELL",
                        "3": "BUY_MINUS",
                        "4": "SELL_PLUS",
                        "5": "SELL_SHORT",
                        "6": "SELL_SHORT_EXEMPT",
                        "7": "UNDISCLOSED",
                        "8": "CROSS",
                        "9": "CROSS_SHORT",
                        "A": "CROSS_SHORT_EXEMPT",
                        "B": "AS_DEFINED",
                        "C": "OPPOSITE",
                        "D": "SUBSCRIBE",
                        "E": "REDEEM",
                        "F": "LEND",
                        "G": "BORROW"
                    }
                },
                "55": {
                    "name": "Symbol",
                    "type": "STRING"
                },
                "56": {
                    "name": "TargetCompID",
                    "type": "STRING"
                },
                "57": {
                    "name": "TargetSubID",
                    "type": "STRING"
                },
                "58": {
                    "name": "Text",
                    "type": "STRING"
                },
                "59": {
                    "name": "TimeInForce",
                    "type": "CHAR",
                    "values": {
                        "0": "DAY",
                        "1": "GOOD_TILL_CANCEL",
                        "2": "AT_THE_OPENING",
                        "3": "IMMEDIATE_OR_CANCEL",
                        "4": "FILL_OR_KILL",
                        "5": "GOOD_TILL_CROSSING",
                        "6": "GOOD_TILL_DATE",
                        "7": "AT_THE_CLOSE"
                    }
                },
                "60": {
                    "name": "TransactTime",
                    "type": "UTCTIMESTAMP"
                },
                "61": {
                    "name": "Urgency",
                    "type": "CHAR",
                    "values": {
                        "0": "NORMAL",
                        "1": "FLASH",
                        "2": "BACKGROUND"
                    }
                },
                "62": {
                    "name": "ValidUntilTime",
                    "type": "UTCTIMESTAMP"
                },
                "63": {
                    "name": "SettlType",
                    "type": "CHAR",
                    "values": {
                        "0": "REGULAR",
                        "1": "CASH",
                        "2": "NEXT_DAY",
                        "3": "T_PLUS_2",
                        "4": "T_PLUS_3",
                        "5": "T_PLUS_4",
                        "6": "FUTURE",
                        "7": "WHEN_AND_IF_ISSUED",
                        "8": "SELLERS_OPTION",
                        "9": "T_PLUS_5"
                    }
                },
                "64": {
                    "name": "SettlDate",
                    "type": "LOCALMKTDATE"
                },
                "65": {
                    "name": "SymbolSfx",
                    "type": "STRING",
                    "allowOtherValues": "true",
                    "values": {
                        "WI": "WHEN_ISSUED",
                        "CD": "A_EUCP_WITH_LUMP_SUM_INTEREST"
                    }
                },
                "66": {
                    "name": "ListID",
                    "type": "STRING"
                },
                "67": {
                    "name": "ListSeqNo",
                    "type": "INT"
                },
                "68": {
                    "name": "TotNoOrders",
                    "type": "INT"
                },
                "69": {
                    "name": "ListExecInst",
                    "type": "STRING"
                },
                "70": {
                    "name": "AllocID",
                    "type": "STRING"
                },
                "71": {
                    "name": "AllocTransType",
                    "type": "CHAR",
                    "values": {
                        "0": "NEW",
                        "1": "REPLACE",
                        "2": "CANCEL",
                        "3": "PRELIMINARY",
                        "4": "CALCULATED",
                        "5": "CALCULATED_WITHOUT_PRELIMINARY"
                    }
                },
                "72": {
                    "name": "RefAllocID",
                    "type": "STRING"
                },
                "73": {
                    "name": "NoOrders",
                    "type": "NUMINGROUP"
                },
                "74": {
                    "name": "AvgPxPrecision",
                    "type": "INT"
                },
                "75": {
                    "name": "TradeDate",
                    "type": "LOCALMKTDATE"
                },
                "77": {
                    "name": "PositionEffect",
                    "type": "CHAR",
                    "values": {
                        "O": "OPEN",
                        "C": "CLOSE",
                        "R": "ROLLED",
                        "F": "FIFO"
                    }
                },
                "78": {
                    "name": "NoAllocs",
                    "type": "NUMINGROUP"
                },
                "79": {
                    "name": "AllocAccount",
                    "type": "STRING"
                },
                "80": {
                    "name": "AllocQty",
                    "type": "QTY"
                },
                "81": {
                    "name": "ProcessCode",
                    "type": "CHAR",
                    "values": {
                        "0": "REGULAR",
                        "1": "SOFT_DOLLAR",
                        "2": "STEP_IN",
                        "3": "STEP_OUT",
                        "4": "SOFT_DOLLAR_STEP_IN",
                        "5": "SOFT_DOLLAR_STEP_OUT",
                        "6": "PLAN_SPONSOR"
                    }
                },
                "82": {
                    "name": "NoRpts",
                    "type": "NUMINGROUP"
                },
                "83": {
                    "name": "RptSeq",
                    "type": "INT"
                },
                "84": {
                    "name": "CxlQty",
                    "type": "QTY"
                },
                "85": {
                    "name": "NoDlvyInst",
                    "type": "NUMINGROUP"
                },
                "87": {
                    "name": "AllocStatus",
                    "type": "INT",
                    "values": {
                        "0": "ACCEPTED",
                        "1": "BLOCK_LEVEL_REJECT",
                        "2": "ACCOUNT_LEVEL_REJECT",
                        "3": "RECEIVED",
                        "4": "INCOMPLETE",
                        "5": "REJECTED_BY_INTERMEDIARY"
                    }
                },
                "88": {
                    "name": "AllocRejCode",
                    "type": "INT",
                    "values": {
                        "0": "UNKNOWN_ACCOUNT",
                        "1": "INCORRECT_QUANTITY",
                        "2": "INCORRECT_AVERAGE_PRICE",
                        "3": "UNKNOWN_EXECUTING_BROKER_MNEMONIC",
                        "4": "COMMISSION_DIFFERENCE",
                        "5": "UNKNOWN_ORDERID",
                        "6": "UNKNOWN_LISTID",
                        "7": "OTHER",
                        "8": "INCORRECT_ALLOCATED_QUANTITY",
                        "9": "CALCULATION_DIFFERENCE",
                        "10": "UNKNOWN_OR_STALE_EXEC_ID",
                        "11": "MISMATCHED_DATA_VALUE",
                        "12": "UNKNOWN_CLORDID",
                        "13": "WAREHOUSE_REQUEST_REJECTED"
                    }
                },
                "89": {
                    "name": "Signature",
                    "type": "DATA"
                },
                "90": {
                    "name": "SecureDataLen",
                    "type": "LENGTH"
                },
                "91": {
                    "name": "SecureData",
                    "type": "DATA"
                },
                "93": {
                    "name": "SignatureLength",
                    "type": "LENGTH"
                },
                "94": {
                    "name": "EmailType",
                    "type": "CHAR",
                    "values": {
                        "0": "NEW",
                        "1": "REPLY",
                        "2": "ADMIN_REPLY"
                    }
                },
                "95": {
                    "name": "RawDataLength",
                    "type": "LENGTH"
                },
                "96": {
                    "name": "RawData",
                    "type": "DATA"
                },
                "97": {
                    "name": "PossResend",
                    "type": "BOOLEAN"
                },
                "98": {
                    "name": "EncryptMethod",
                    "type": "INT",
                    "values": {
                        "0": "NONE_OTHER",
                        "1": "PKCS",
                        "2": "DES",
                        "3": "PKCS_DES",
                        "4": "PGP_DES",
                        "5": "PGP_DES_MD5",
                        "6": "PEM_DES_MD5"
                    }
                },
                "99": {
                    "name": "StopPx",
                    "type": "PRICE"
                },
                "100": {
                    "name": "ExDestination",
                    "type": "EXCHANGE"
                },
                "102": {
                    "name": "CxlRejReason",
                    "type": "INT",
                    "values": {
                        "0": "TOO_LATE_TO_CANCEL",
                        "1": "UNKNOWN_ORDER",
                        "2": "BROKER_EXCHANGE_OPTION",
                        "3": "ORDER_ALREADY_IN_PENDING_CANCEL_OR_PENDING_REPLACE_STATUS",
                        "4": "UNABLE_TO_PROCESS_ORDER_MASS_CANCEL_REQUEST",
                        "5": "ORIGORDMODTIME_DID_NOT_MATCH_LAST_TRANSACTTIME_OF_ORDER",
                        "6": "DUPLICATE_CLORDID_RECEIVED",
                        "99": "OTHER"
                    }
                },
                "103": {
                    "name": "OrdRejReason",
                    "type": "INT",
                    "values": {
                        "0": "BROKER_EXCHANGE_OPTION",
                        "1": "UNKNOWN_SYMBOL",
                        "2": "EXCHANGE_CLOSED",
                        "3": "ORDER_EXCEEDS_LIMIT",
                        "4": "TOO_LATE_TO_ENTER",
                        "5": "UNKNOWN_ORDER",
                        "6": "DUPLICATE_ORDER",
                        "7": "DUPLICATE_OF_A_VERBALLY_COMMUNICATED_ORDER",
                        "8": "STALE_ORDER",
                        "9": "TRADE_ALONG_REQUIRED",
                        "10": "INVALID_INVESTOR_ID",
                        "11": "UNSUPPORTED_ORDER_CHARACTERISTIC",
                        "12": "SURVEILLENCE_OPTION",
                        "13": "INCORRECT_QUANTITY",
                        "14": "INCORRECT_ALLOCATED_QUANTITY",
                        "15": "UNKNOWN_ACCOUNT",
                        "99": "OTHER"
                    }
                },
                "104": {
                    "name": "IOIQualifier",
                    "type": "CHAR",
                    "values": {
                        "A": "ALL_OR_NONE",
                        "B": "MARKET_ON_CLOSE",
                        "C": "AT_THE_CLOSE",
                        "D": "VWAP",
                        "I": "IN_TOUCH_WITH",
                        "L": "LIMIT",
                        "M": "MORE_BEHIND",
                        "O": "AT_THE_OPEN",
                        "P": "TAKING_A_POSITION",
                        "Q": "AT_THE_MARKET",
                        "R": "READY_TO_TRADE",
                        "S": "PORTFOLIO_SHOWN",
                        "T": "THROUGH_THE_DAY",
                        "V": "VERSUS",
                        "W": "INDICATION_WORKING_AWAY",
                        "X": "CROSSING_OPPORTUNITY",
                        "Y": "AT_THE_MIDPOINT",
                        "Z": "PRE_OPEN"
                    }
                },
                "105": {
                    "name": "WaveNo",
                    "type": "STRING"
                },
                "106": {
                    "name": "Issuer",
                    "type": "STRING"
                },
                "107": {
                    "name": "SecurityDesc",
                    "type": "STRING"
                },
                "108": {
                    "name": "HeartBtInt",
                    "type": "INT"
                },
                "110": {
                    "name": "MinQty",
                    "type": "QTY"
                },
                "111": {
                    "name": "MaxFloor",
                    "type": "QTY"
                },
                "112": {
                    "name": "TestReqID",
                    "type": "STRING"
                },
                "113": {
                    "name": "ReportToExch",
                    "type": "BOOLEAN"
                },
                "114": {
                    "name": "LocateReqd",
                    "type": "BOOLEAN"
                },
                "115": {
                    "name": "OnBehalfOfCompID",
                    "type": "STRING"
                },
                "116": {
                    "name": "OnBehalfOfSubID",
                    "type": "STRING"
                },
                "117": {
                    "name": "QuoteID",
                    "type": "STRING"
                },
                "118": {
                    "name": "NetMoney",
                    "type": "AMT"
                },
                "119": {
                    "name": "SettlCurrAmt",
                    "type": "AMT"
                },
                "120": {
                    "name": "SettlCurrency",
                    "type": "CURRENCY"
                },
                "121": {
                    "name": "ForexReq",
                    "type": "BOOLEAN"
                },
                "122": {
                    "name": "OrigSendingTime",
                    "type": "UTCTIMESTAMP"
                },
                "123": {
                    "name": "GapFillFlag",
                    "type": "BOOLEAN"
                },
                "124": {
                    "name": "NoExecs",
                    "type": "NUMINGROUP"
                },
                "126": {
                    "name": "ExpireTime",
                    "type": "UTCTIMESTAMP"
                },
                "127": {
                    "name": "DKReason",
                    "type": "CHAR",
                    "values": {
                        "A": "UNKNOWN_SYMBOL",
                        "B": "WRONG_SIDE",
                        "C": "QUANTITY_EXCEEDS_ORDER",
                        "D": "NO_MATCHING_ORDER",
                        "E": "PRICE_EXCEEDS_LIMIT",
                        "F": "CALCULATION_DIFFERENCE",
                        "Z": "OTHER"
                    }
                },
                "128": {
                    "name": "DeliverToCompID",
                    "type": "STRING"
                },
                "129": {
                    "name": "DeliverToSubID",
                    "type": "STRING"
                },
                "130": {
                    "name": "IOINaturalFlag",
                    "type": "BOOLEAN"
                },
                "131": {
                    "name": "QuoteReqID",
                    "type": "STRING"
                },
                "132": {
                    "name": "BidPx",
                    "type": "PRICE"
                },
                "133": {
                    "name": "OfferPx",
                    "type": "PRICE"
                },
                "134": {
                    "name": "BidSize",
                    "type": "QTY"
                },
                "135": {
                    "name": "OfferSize",
                    "type": "QTY"
                },
                "136": {
                    "name": "NoMiscFees",
                    "type": "NUMINGROUP"
                },
                "137": {
                    "name": "MiscFeeAmt",
                    "type": "AMT"
                },
                "138": {
                    "name": "MiscFeeCurr",
                    "type": "CURRENCY"
                },
                "139": {
                    "name": "MiscFeeType",
                    "type": "CHAR",
                    "values": {
                        "1": "REGULATORY",
                        "2": "TAX",
                        "3": "LOCAL_COMMISSION",
                        "4": "EXCHANGE_FEES",
                        "5": "STAMP",
                        "6": "LEVY",
                        "7": "OTHER",
                        "8": "MARKUP",
                        "9": "CONSUMPTION_TAX"
                    }
                },
                "140": {
                    "name": "PrevClosePx",
                    "type": "PRICE"
                },
                "141": {
                    "name": "ResetSeqNumFlag",
                    "type": "BOOLEAN"
                },
                "142": {
                    "name": "SenderLocationID",
                    "type": "STRING"
                },
                "143": {
                    "name": "TargetLocationID",
                    "type": "STRING"
                },
                "144": {
                    "name": "OnBehalfOfLocationID",
                    "type": "STRING"
                },
                "145": {
                    "name": "DeliverToLocationID",
                    "type": "STRING"
                },
                "146": {
                    "name": "NoRelatedSym",
                    "type": "NUMINGROUP"
                },
                "147": {
                    "name": "Subject",
                    "type": "STRING"
                },
                "148": {
                    "name": "Headline",
                    "type": "STRING"
                },
                "149": {
                    "name": "URLLink",
                    "type": "STRING"
                },
                "150": {
                    "name": "ExecType",
                    "type": "CHAR",
                    "values": {
                        "0": "NEW",
                        "1": "PARTIAL_FILL",
                        "2": "FILL",
                        "3": "DONE_FOR_DAY",
                        "4": "CANCELED",
                        "5": "REPLACE",
                        "6": "PENDING_CANCEL",
                        "7": "STOPPED",
                        "8": "REJECTED",
                        "9": "SUSPENDED",
                        "A": "PENDING_NEW",
                        "B": "CALCULATED",
                        "C": "EXPIRED",
                        "D": "RESTATED",
                        "E": "PENDING_REPLACE",
                        "F": "TRADE",
                        "G": "TRADE_CORRECT",
                        "H": "TRADE_CANCEL",
                        "I": "ORDER_STATUS"
                    }
                },
                "151": {
                    "name": "LeavesQty",
                    "type": "QTY"
                },
                "152": {
                    "name": "CashOrderQty",
                    "type": "QTY"
                },
                "153": {
                    "name": "AllocAvgPx",
                    "type": "PRICE"
                },
                "154": {
                    "name": "AllocNetMoney",
                    "type": "AMT"
                },
                "155": {
                    "name": "SettlCurrFxRate",
                    "type": "FLOAT"
                },
                "156": {
                    "name": "SettlCurrFxRateCalc",
                    "type": "CHAR",
                    "values": {
                        "M": "MULTIPLY",
                        "D": "DIVIDE"
                    }
                },
                "157": {
                    "name": "NumDaysInterest",
                    "type": "INT"
                },
                "158": {
                    "name": "AccruedInterestRate",
                    "type": "PERCENTAGE"
                },
                "159": {
                    "name": "AccruedInterestAmt",
                    "type": "AMT"
                },
                "160": {
                    "name": "SettlInstMode",
                    "type": "CHAR",
                    "values": {
                        "0": "DEFAULT",
                        "1": "STANDING_INSTRUCTIONS_PROVIDED",
                        "4": "SPECIFIC_ORDER_FOR_A_SINGLE_ACCOUNT",
                        "5": "REQUEST_REJECT"
                    }
                },
                "161": {
                    "name": "AllocText",
                    "type": "STRING"
                },
                "162": {
                    "name": "SettlInstID",
                    "type": "STRING"
                },
                "163": {
                    "name": "SettlInstTransType",
                    "type": "CHAR",
                    "values": {
                        "N": "NEW",
                        "C": "CANCEL",
                        "R": "REPLACE",
                        "T": "RESTATE"
                    }
                },
                "164": {
                    "name": "EmailThreadID",
                    "type": "STRING"
                },
                "165": {
                    "name": "SettlInstSource",
                    "type": "CHAR",
                    "values": {
                        "1": "BROKERS_INSTRUCTIONS",
                        "2": "INSTITUTIONS_INSTRUCTIONS",
                        "3": "INVESTOR"
                    }
                },
                "167": {
                    "name": "SecurityType",
                    "type": "STRING",
                    "values": {
                        "?": "WILDCARD",
                        "ABS": "ASSET_BACKED_SECURITIES",
                        "AMENDED": "AMENDED_AND_RESTATED",
                        "AN": "OTHER_ANTICIPATION_NOTES",
                        "BA": "BANKERS_ACCEPTANCE",
                        "BN": "BANK_NOTES",
                        "BOX": "BILL_OF_EXCHANGES",
                        "BRADY": "BRADY_BOND",
                        "BRIDGE": "BRIDGE_LOAN",
                        "BUYSELL": "BUY_SELLBACK",
                        "CB": "CONVERTIBLE_BOND",
                        "CD": "CERTIFICATE_OF_DEPOSIT",
                        "CL": "CALL_LOANS",
                        "CMBS": "CORP_MORTGAGE_BACKED_SECURITIES",
                        "CMO": "COLLATERALIZED_MORTGAGE_OBLIGATION",
                        "COFO": "CERTIFICATE_OF_OBLIGATION",
                        "COFP": "CERTIFICATE_OF_PARTICIPATION",
                        "CORP": "CORPORATE_BOND",
                        "CP": "COMMERCIAL_PAPER",
                        "CPP": "CORPORATE_PRIVATE_PLACEMENT",
                        "CS": "COMMON_STOCK",
                        "DEFLTED": "DEFAULTED",
                        "DINP": "DEBTOR_IN_POSSESSION",
                        "DN": "DEPOSIT_NOTES",
                        "DUAL": "DUAL_CURRENCY",
                        "EUCD": "EURO_CERTIFICATE_OF_DEPOSIT",
                        "EUCORP": "EURO_CORPORATE_BOND",
                        "EUCP": "EURO_COMMERCIAL_PAPER",
                        "EUSOV": "EURO_SOVEREIGNS",
                        "EUSUPRA": "EURO_SUPRANATIONAL_COUPONS",
                        "FAC": "FEDERAL_AGENCY_COUPON",
                        "FADN": "FEDERAL_AGENCY_DISCOUNT_NOTE",
                        "FOR": "FOREIGN_EXCHANGE_CONTRACT",
                        "FORWARD": "FORWARD",
                        "FUT": "FUTURE",
                        "GO": "GENERAL_OBLIGATION_BONDS",
                        "IET": "IOETTE_MORTGAGE",
                        "LOFC": "LETTER_OF_CREDIT",
                        "LQN": "LIQUIDITY_NOTE",
                        "MATURED": "MATURED",
                        "MBS": "MORTGAGE_BACKED_SECURITIES",
                        "MF": "MUTUAL_FUND",
                        "MIO": "MORTGAGE_INTEREST_ONLY",
                        "MLEG": "MULTI_LEG_INSTRUMENT",
                        "MPO": "MORTGAGE_PRINCIPAL_ONLY",
                        "MPP": "MORTGAGE_PRIVATE_PLACEMENT",
                        "MPT": "MISCELLANEOUS_PASS_THROUGH",
                        "MT": "MANDATORY_TENDER",
                        "MTN": "MEDIUM_TERM_NOTES",
                        "NONE": "NO_SECURITY_TYPE",
                        "ONITE": "OVERNIGHT",
                        "OPT": "OPTION",
                        "PEF": "PRIVATE_EXPORT_FUNDING",
                        "PFAND": "PFANDBRIEFE",
                        "PN": "PROMISSORY_NOTE",
                        "PS": "PREFERRED_STOCK",
                        "PZFJ": "PLAZOS_FIJOS",
                        "RAN": "REVENUE_ANTICIPATION_NOTE",
                        "REPLACD": "REPLACED",
                        "REPO": "REPURCHASE",
                        "RETIRED": "RETIRED",
                        "REV": "REVENUE_BONDS",
                        "RVLV": "REVOLVER_LOAN",
                        "RVLVTRM": "REVOLVER_TERM_LOAN",
                        "SECLOAN": "SECURITIES_LOAN",
                        "SECPLEDGE": "SECURITIES_PLEDGE",
                        "SPCLA": "SPECIAL_ASSESSMENT",
                        "SPCLO": "SPECIAL_OBLIGATION",
                        "SPCLT": "SPECIAL_TAX",
                        "STN": "SHORT_TERM_LOAN_NOTE",
                        "STRUCT": "STRUCTURED_NOTES",
                        "SUPRA": "USD_SUPRANATIONAL_COUPONS",
                        "SWING": "SWING_LINE_FACILITY",
                        "TAN": "TAX_ANTICIPATION_NOTE",
                        "TAXA": "TAX_ALLOCATION",
                        "TBA": "TO_BE_ANNOUNCED",
                        "TBILL": "US_TREASURY_BILL",
                        "TBOND": "US_TREASURY_BOND",
                        "TCAL": "PRINCIPAL_STRIP_OF_A_CALLABLE_BOND_OR_NOTE",
                        "TD": "TIME_DEPOSIT",
                        "TECP": "TAX_EXEMPT_COMMERCIAL_PAPER",
                        "TERM": "TERM_LOAN",
                        "TINT": "INTEREST_STRIP_FROM_ANY_BOND_OR_NOTE",
                        "TIPS": "TREASURY_INFLATION_PROTECTED_SECURITIES",
                        "TNOTE": "US_TREASURY_NOTE",
                        "TPRN": "PRINCIPAL_STRIP_FROM_A_NON_CALLABLE_BOND_OR_NOTE",
                        "TRAN": "TAX_AND_REVENUE_ANTICIPATION_NOTE",
                        "VRDN": "VARIABLE_RATE_DEMAND_NOTE",
                        "WAR": "WARRANT",
                        "WITHDRN": "WITHDRAWN",
                        "XCN": "EXTENDED_COMM_NOTE",
                        "XLINKD": "INDEXED_LINKED",
                        "YANK": "YANKEE_CORPORATE_BOND",
                        "YCD": "YANKEE_CERTIFICATE_OF_DEPOSIT"
                    }
                },
                "168": {
                    "name": "EffectiveTime",
                    "type": "UTCTIMESTAMP"
                },
                "169": {
                    "name": "StandInstDbType",
                    "type": "INT",
                    "values": {
                        "0": "OTHER",
                        "1": "DTC_SID",
                        "2": "THOMSON_ALERT",
                        "3": "A_GLOBAL_CUSTODIAN",
                        "4": "ACCOUNTNET"
                    }
                },
                "170": {
                    "name": "StandInstDbName",
                    "type": "STRING"
                },
                "171": {
                    "name": "StandInstDbID",
                    "type": "STRING"
                },
                "172": {
                    "name": "SettlDeliveryType",
                    "type": "INT",
                    "values": {
                        "0": "VERSUS_PAYMENT",
                        "1": "FREE",
                        "2": "TRI_PARTY",
                        "3": "HOLD_IN_CUSTODY"
                    }
                },
                "188": {
                    "name": "BidSpotRate",
                    "type": "PRICE"
                },
                "189": {
                    "name": "BidForwardPoints",
                    "type": "PRICEOFFSET"
                },
                "190": {
                    "name": "OfferSpotRate",
                    "type": "PRICE"
                },
                "191": {
                    "name": "OfferForwardPoints",
                    "type": "PRICEOFFSET"
                },
                "192": {
                    "name": "OrderQty2",
                    "type": "QTY"
                },
                "193": {
                    "name": "SettlDate2",
                    "type": "LOCALMKTDATE"
                },
                "194": {
                    "name": "LastSpotRate",
                    "type": "PRICE"
                },
                "195": {
                    "name": "LastForwardPoints",
                    "type": "PRICEOFFSET"
                },
                "196": {
                    "name": "AllocLinkID",
                    "type": "STRING"
                },
                "197": {
                    "name": "AllocLinkType",
                    "type": "INT",
                    "values": {
                        "0": "F_X_NETTING",
                        "1": "F_X_SWAP"
                    }
                },
                "198": {
                    "name": "SecondaryOrderID",
                    "type": "STRING"
                },
                "199": {
                    "name": "NoIOIQualifiers",
                    "type": "NUMINGROUP"
                },
                "200": {
                    "name": "MaturityMonthYear",
                    "type": "MONTHYEAR"
                },
                "202": {
                    "name": "StrikePrice",
                    "type": "PRICE"
                },
                "203": {
                    "name": "CoveredOrUncovered",
                    "type": "INT",
                    "values": {
                        "0": "COVERED",
                        "1": "UNCOVERED"
                    }
                },
                "206": {
                    "name": "OptAttribute",
                    "type": "CHAR"
                },
                "207": {
                    "name": "SecurityExchange",
                    "type": "EXCHANGE"
                },
                "208": {
                    "name": "NotifyBrokerOfCredit",
                    "type": "BOOLEAN"
                },
                "209": {
                    "name": "AllocHandlInst",
                    "type": "INT",
                    "values": {
                        "1": "MATCH",
                        "2": "FORWARD",
                        "3": "FORWARD_AND_MATCH"
                    }
                },
                "210": {
                    "name": "MaxShow",
                    "type": "QTY"
                },
                "211": {
                    "name": "PegOffsetValue",
                    "type": "FLOAT"
                },
                "212": {
                    "name": "XmlDataLen",
                    "type": "LENGTH"
                },
                "213": {
                    "name": "XmlData",
                    "type": "DATA"
                },
                "214": {
                    "name": "SettlInstRefID",
                    "type": "STRING"
                },
                "215": {
                    "name": "NoRoutingIDs",
                    "type": "NUMINGROUP"
                },
                "216": {
                    "name": "RoutingType",
                    "type": "INT",
                    "values": {
                        "1": "TARGET_FIRM",
                        "2": "TARGET_LIST",
                        "3": "BLOCK_FIRM",
                        "4": "BLOCK_LIST"
                    }
                },
                "217": {
                    "name": "RoutingID",
                    "type": "STRING"
                },
                "218": {
                    "name": "Spread",
                    "type": "PRICEOFFSET"
                },
                "220": {
                    "name": "BenchmarkCurveCurrency",
                    "type": "CURRENCY"
                },
                "221": {
                    "name": "BenchmarkCurveName",
                    "type": "STRING",
                    "values": {
                        "MuniAAA": "MUNIAAA",
                        "FutureSWAP": "FUTURESWAP",
                        "LIBID": "LIBID",
                        "LIBOR": "LIBOR",
                        "OTHER": "OTHER",
                        "SWAP": "SWAP",
                        "Treasury": "TREASURY",
                        "Euribor": "EURIBOR",
                        "Pfandbriefe": "PFANDBRIEFE",
                        "EONIA": "EONIA",
                        "SONIA": "SONIA",
                        "EUREPO": "EUREPO"
                    }
                },
                "222": {
                    "name": "BenchmarkCurvePoint",
                    "type": "STRING"
                },
                "223": {
                    "name": "CouponRate",
                    "type": "PERCENTAGE"
                },
                "224": {
                    "name": "CouponPaymentDate",
                    "type": "LOCALMKTDATE"
                },
                "225": {
                    "name": "IssueDate",
                    "type": "LOCALMKTDATE"
                },
                "226": {
                    "name": "RepurchaseTerm",
                    "type": "INT"
                },
                "227": {
                    "name": "RepurchaseRate",
                    "type": "PERCENTAGE"
                },
                "228": {
                    "name": "Factor",
                    "type": "FLOAT"
                },
                "229": {
                    "name": "TradeOriginationDate",
                    "type": "LOCALMKTDATE"
                },
                "230": {
                    "name": "ExDate",
                    "type": "LOCALMKTDATE"
                },
                "231": {
                    "name": "ContractMultiplier",
                    "type": "FLOAT"
                },
                "232": {
                    "name": "NoStipulations",
                    "type": "NUMINGROUP"
                },
                "233": {
                    "name": "StipulationType",
                    "type": "STRING",
                    "values": {
                        "AMT": "AMT",
                        "AUTOREINV": "AUTO_REINVESTMENT_AT_OR_BETTER",
                        "BANKQUAL": "BANK_QUALIFIED",
                        "BGNCON": "BARGAIN_CONDITIONS",
                        "COUPON": "COUPON_RANGE",
                        "CURRENCY": "ISO_CURRENCY_CODE",
                        "CUSTOMDATE": "CUSTOM_START_END_DATE",
                        "GEOG": "GEOGRAPHICS_AND_PERCENT_RANGE",
                        "HAIRCUT": "VALUATION_DISCOUNT",
                        "INSURED": "INSURED",
                        "ISSUE": "YEAR_OR_YEAR_MONTH_OF_ISSUE",
                        "ISSUER": "ISSUERS_TICKER",
                        "ISSUESIZE": "ISSUE_SIZE_RANGE",
                        "LOOKBACK": "LOOKBACK_DAYS",
                        "LOT": "EXPLICIT_LOT_IDENTIFIER",
                        "LOTVAR": "LOT_VARIANCE",
                        "MAT": "MATURITY_YEAR_AND_MONTH",
                        "MATURITY": "MATURITY_RANGE",
                        "MAXSUBS": "MAXIMUM_SUBSTITUTIONS",
                        "MINQTY": "MINIMUM_QUANTITY",
                        "MININCR": "MINIMUM_INCREMENT",
                        "MINDNOM": "MINIMUM_DENOMINATION",
                        "PAYFREQ": "PAYMENT_FREQUENCY_CALENDAR",
                        "PIECES": "NUMBER_OF_PIECES",
                        "PMAX": "POOLS_MAXIMUM",
                        "PPM": "POOLS_PER_MILLION",
                        "PPL": "POOLS_PER_LOT",
                        "PPT": "POOLS_PER_TRADE",
                        "PRICE": "PRICE_RANGE",
                        "PRICEFREQ": "PRICING_FREQUENCY",
                        "PROD": "PRODUCTION_YEAR",
                        "PROTECT": "CALL_PROTECTION",
                        "PURPOSE": "PURPOSE",
                        "PXSOURCE": "BENCHMARK_PRICE_SOURCE",
                        "RATING": "RATING_SOURCE_AND_RANGE",
                        "RESTRICTED": "RESTRICTED",
                        "SECTOR": "MARKET_SECTOR",
                        "SECTYPE": "SECURITYTYPE_INCLUDED_OR_EXCLUDED",
                        "STRUCT": "STRUCTURE",
                        "SUBSFREQ": "SUBSTITUTIONS_FREQUENCY",
                        "SUBSLEFT": "SUBSTITUTIONS_LEFT",
                        "TEXT": "FREEFORM_TEXT",
                        "TRDVAR": "TRADE_VARIANCE",
                        "WAC": "WEIGHTED_AVERAGE_COUPON",
                        "WAL": "WEIGHTED_AVERAGE_LIFE_COUPON",
                        "WALA": "WEIGHTED_AVERAGE_LOAN_AGE",
                        "WAM": "WEIGHTED_AVERAGE_MATURITY",
                        "WHOLE": "WHOLE_POOL",
                        "YIELD": "YIELD_RANGE",
                        "SMM": "SINGLE_MONTHLY_MORTALITY",
                        "CPR": "CONSTANT_PREPAYMENT_RATE",
                        "CPY": "CONSTANT_PREPAYMENT_YIELD",
                        "CPP": "CONSTANT_PREPAYMENT_PENALTY",
                        "ABS": "ABSOLUTE_PREPAYMENT_SPEED",
                        "MPR": "MONTHLY_PREPAYMENT_RATE",
                        "PSA": "PERCENT_OF_BMA_PREPAYMENT_CURVE",
                        "PPC": "PERCENT_OF_PROSPECTUS_PREPAYMENT_CURVE",
                        "MHP": "PERCENT_OF_MANUFACTURED_HOUSING_PREPAYMENT_CURVE",
                        "HEP": "FINAL_CPR_OF_HOME_EQUITY_PREPAYMENT_CURVE"
                    }
                },
                "234": {
                    "name": "StipulationValue",
                    "type": "STRING",
                    "values": {
                        "CD": "SPECIAL_CUM_DIVIDEND",
                        "XD": "SPECIAL_EX_DIVIDEND",
                        "CC": "SPECIAL_CUM_COUPON",
                        "XC": "SPECIAL_EX_COUPON",
                        "CB": "SPECIAL_CUM_BONUS",
                        "XB": "SPECIAL_EX_BONUS",
                        "CR": "SPECIAL_CUM_RIGHTS",
                        "XR": "SPECIAL_EX_RIGHTS",
                        "CP": "SPECIAL_CUM_CAPITAL_REPAYMENTS",
                        "XP": "SPECIAL_EX_CAPITAL_REPAYMENTS",
                        "CS": "CASH_SETTLEMENT",
                        "SP": "SPECIAL_PRICE",
                        "TR": "REPORT_FOR_EUROPEAN_EQUITY_MARKET_SECURITIES",
                        "GD": "GUARANTEED_DELIVERY"
                    }
                },
                "235": {
                    "name": "YieldType",
                    "type": "STRING",
                    "values": {
                        "AFTERTAX": "AFTER_TAX_YIELD",
                        "ANNUAL": "ANNUAL_YIELD",
                        "ATISSUE": "YIELD_AT_ISSUE",
                        "AVGMATURITY": "YIELD_TO_AVERAGE_MATURITY",
                        "BOOK": "BOOK_YIELD",
                        "CALL": "YIELD_TO_NEXT_CALL",
                        "CHANGE": "YIELD_CHANGE_SINCE_CLOSE",
                        "CLOSE": "CLOSING_YIELD",
                        "COMPOUND": "COMPOUND_YIELD",
                        "CURRENT": "CURRENT_YIELD",
                        "GROSS": "TRUE_GROSS_YIELD",
                        "GOVTEQUIV": "GOVERNMENT_EQUIVALENT_YIELD",
                        "INFLATION": "YIELD_WITH_INFLATION_ASSUMPTION",
                        "INVERSEFLOATER": "INVERSE_FLOATER_BOND_YIELD",
                        "LASTCLOSE": "MOST_RECENT_CLOSING_YIELD",
                        "LASTMONTH": "CLOSING_YIELD_MOST_RECENT_MONTH",
                        "LASTQUARTER": "CLOSING_YIELD_MOST_RECENT_QUARTER",
                        "LASTYEAR": "CLOSING_YIELD_MOST_RECENT_YEAR",
                        "LONGAVGLIFE": "YIELD_TO_LONGEST_AVERAGE_LIFE",
                        "MARK": "MARK_TO_MARKET_YIELD",
                        "MATURITY": "YIELD_TO_MATURITY",
                        "NEXTREFUND": "YIELD_TO_NEXT_REFUND",
                        "OPENAVG": "OPEN_AVERAGE_YIELD",
                        "PUT": "YIELD_TO_NEXT_PUT",
                        "PREVCLOSE": "PREVIOUS_CLOSE_YIELD",
                        "PROCEEDS": "PROCEEDS_YIELD",
                        "SEMIANNUAL": "SEMI_ANNUAL_YIELD",
                        "SHORTAVGLIFE": "YIELD_TO_SHORTEST_AVERAGE_LIFE",
                        "SIMPLE": "SIMPLE_YIELD",
                        "TAXEQUIV": "TAX_EQUIVALENT_YIELD",
                        "TENDER": "YIELD_TO_TENDER_DATE",
                        "TRUE": "TRUE_YIELD",
                        "VALUE1_32": "YIELD_VALUE_OF_1_32",
                        "WORST": "YIELD_TO_WORST"
                    }
                },
                "236": {
                    "name": "Yield",
                    "type": "PERCENTAGE"
                },
                "237": {
                    "name": "TotalTakedown",
                    "type": "AMT"
                },
                "238": {
                    "name": "Concession",
                    "type": "AMT"
                },
                "239": {
                    "name": "RepoCollateralSecurityType",
                    "type": "INT"
                },
                "240": {
                    "name": "RedemptionDate",
                    "type": "LOCALMKTDATE"
                },
                "241": {
                    "name": "UnderlyingCouponPaymentDate",
                    "type": "LOCALMKTDATE"
                },
                "242": {
                    "name": "UnderlyingIssueDate",
                    "type": "LOCALMKTDATE"
                },
                "243": {
                    "name": "UnderlyingRepoCollateralSecurityType",
                    "type": "INT"
                },
                "244": {
                    "name": "UnderlyingRepurchaseTerm",
                    "type": "INT"
                },
                "245": {
                    "name": "UnderlyingRepurchaseRate",
                    "type": "PERCENTAGE"
                },
                "246": {
                    "name": "UnderlyingFactor",
                    "type": "FLOAT"
                },
                "247": {
                    "name": "UnderlyingRedemptionDate",
                    "type": "LOCALMKTDATE"
                },
                "248": {
                    "name": "LegCouponPaymentDate",
                    "type": "LOCALMKTDATE"
                },
                "249": {
                    "name": "LegIssueDate",
                    "type": "LOCALMKTDATE"
                },
                "250": {
                    "name": "LegRepoCollateralSecurityType",
                    "type": "INT"
                },
                "251": {
                    "name": "LegRepurchaseTerm",
                    "type": "INT"
                },
                "252": {
                    "name": "LegRepurchaseRate",
                    "type": "PERCENTAGE"
                },
                "253": {
                    "name": "LegFactor",
                    "type": "FLOAT"
                },
                "254": {
                    "name": "LegRedemptionDate",
                    "type": "LOCALMKTDATE"
                },
                "255": {
                    "name": "CreditRating",
                    "type": "STRING"
                },
                "256": {
                    "name": "UnderlyingCreditRating",
                    "type": "STRING"
                },
                "257": {
                    "name": "LegCreditRating",
                    "type": "STRING"
                },
                "258": {
                    "name": "TradedFlatSwitch",
                    "type": "BOOLEAN"
                },
                "259": {
                    "name": "BasisFeatureDate",
                    "type": "LOCALMKTDATE"
                },
                "260": {
                    "name": "BasisFeaturePrice",
                    "type": "PRICE"
                },
                "262": {
                    "name": "MDReqID",
                    "type": "STRING"
                },
                "263": {
                    "name": "SubscriptionRequestType",
                    "type": "CHAR",
                    "values": {
                        "0": "SNAPSHOT",
                        "1": "SNAPSHOT_PLUS_UPDATES",
                        "2": "DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST"
                    }
                },
                "264": {
                    "name": "MarketDepth",
                    "type": "INT"
                },
                "265": {
                    "name": "MDUpdateType",
                    "type": "INT",
                    "values": {
                        "0": "FULL_REFRESH",
                        "1": "INCREMENTAL_REFRESH"
                    }
                },
                "266": {
                    "name": "AggregatedBook",
                    "type": "BOOLEAN"
                },
                "267": {
                    "name": "NoMDEntryTypes",
                    "type": "NUMINGROUP"
                },
                "268": {
                    "name": "NoMDEntries",
                    "type": "NUMINGROUP"
                },
                "269": {
                    "name": "MDEntryType",
                    "type": "CHAR",
                    "values": {
                        "0": "BID",
                        "1": "OFFER",
                        "2": "TRADE",
                        "3": "INDEX_VALUE",
                        "4": "OPENING_PRICE",
                        "5": "CLOSING_PRICE",
                        "6": "SETTLEMENT_PRICE",
                        "7": "TRADING_SESSION_HIGH_PRICE",
                        "8": "TRADING_SESSION_LOW_PRICE",
                        "9": "TRADING_SESSION_VWAP_PRICE",
                        "A": "IMBALANCE",
                        "B": "TRADE_VOLUME",
                        "C": "OPEN_INTEREST"
                    }
                },
                "270": {
                    "name": "MDEntryPx",
                    "type": "PRICE"
                },
                "271": {
                    "name": "MDEntrySize",
                    "type": "QTY"
                },
                "272": {
                    "name": "MDEntryDate",
                    "type": "UTCDATEONLY"
                },
                "273": {
                    "name": "MDEntryTime",
                    "type": "UTCTIMEONLY"
                },
                "274": {
                    "name": "TickDirection",
                    "type": "CHAR",
                    "values": {
                        "0": "PLUS_TICK",
                        "1": "ZERO_PLUS_TICK",
                        "2": "MINUS_TICK",
                        "3": "ZERO_MINUS_TICK"
                    }
                },
                "275": {
                    "name": "MDMkt",
                    "type": "EXCHANGE"
                },
                "276": {
                    "name": "QuoteCondition",
                    "type": "MULTIPLEVALUESTRING",
                    "values": {
                        "A": "OPEN_ACTIVE",
                        "B": "CLOSED_INACTIVE",
                        "C": "EXCHANGE_BEST",
                        "D": "CONSOLIDATED_BEST",
                        "E": "LOCKED",
                        "F": "CROSSED",
                        "G": "DEPTH",
                        "H": "FAST_TRADING",
                        "I": "NON_FIRM"
                    }
                },
                "277": {
                    "name": "TradeCondition",
                    "type": "MULTIPLEVALUESTRING",
                    "values": {
                        "A": "CASH_MARKET",
                        "B": "AVERAGE_PRICE_TRADE",
                        "C": "CASH_TRADE",
                        "D": "NEXT_DAY_MARKET",
                        "E": "OPENING_REOPENING_TRADE_DETAIL",
                        "F": "INTRADAY_TRADE_DETAIL",
                        "G": "RULE127",
                        "H": "RULE155",
                        "I": "SOLD_LAST",
                        "J": "NEXT_DAY_TRADE",
                        "K": "OPENED",
                        "L": "SELLER",
                        "M": "SOLD",
                        "N": "STOPPED_STOCK",
                        "P": "IMBALANCE_MORE_BUYERS",
                        "Q": "IMBALANCE_MORE_SELLERS",
                        "R": "OPENING_PRICE"
                    }
                },
                "278": {
                    "name": "MDEntryID",
                    "type": "STRING"
                },
                "279": {
                    "name": "MDUpdateAction",
                    "type": "CHAR",
                    "values": {
                        "0": "NEW",
                        "1": "CHANGE",
                        "2": "DELETE"
                    }
                },
                "280": {
                    "name": "MDEntryRefID",
                    "type": "STRING"
                },
                "281": {
                    "name": "MDReqRejReason",
                    "type": "CHAR",
                    "values": {
                        "0": "UNKNOWN_SYMBOL",
                        "1": "DUPLICATE_MDREQID",
                        "2": "INSUFFICIENT_BANDWIDTH",
                        "3": "INSUFFICIENT_PERMISSIONS",
                        "4": "UNSUPPORTED_SUBSCRIPTIONREQUESTTYPE",
                        "5": "UNSUPPORTED_MARKETDEPTH",
                        "6": "UNSUPPORTED_MDUPDATETYPE",
                        "7": "UNSUPPORTED_AGGREGATEDBOOK",
                        "8": "UNSUPPORTED_MDENTRYTYPE",
                        "9": "UNSUPPORTED_TRADINGSESSIONID",
                        "A": "UNSUPPORTED_SCOPE",
                        "B": "UNSUPPORTED_OPENCLOSESETTLEFLAG",
                        "C": "UNSUPPORTED_MDIMPLICITDELETE"
                    }
                },
                "282": {
                    "name": "MDEntryOriginator",
                    "type": "STRING"
                },
                "283": {
                    "name": "LocationID",
                    "type": "STRING"
                },
                "284": {
                    "name": "DeskID",
                    "type": "STRING"
                },
                "285": {
                    "name": "DeleteReason",
                    "type": "CHAR",
                    "values": {
                        "0": "CANCELATION_TRADE_BUST",
                        "1": "ERROR"
                    }
                },
                "286": {
                    "name": "OpenCloseSettlFlag",
                    "type": "MULTIPLEVALUESTRING",
                    "values": {
                        "0": "DAILY_OPEN_CLOSE_SETTLEMENT_ENTRY",
                        "1": "SESSION_OPEN_CLOSE_SETTLEMENT_ENTRY",
                        "2": "DELIVERY_SETTLEMENT_ENTRY",
                        "3": "EXPECTED_ENTRY",
                        "4": "ENTRY_FROM_PREVIOUS_BUSINESS_DAY",
                        "5": "THEORETICAL_PRICE_VALUE"
                    }
                },
                "287": {
                    "name": "SellerDays",
                    "type": "INT"
                },
                "288": {
                    "name": "MDEntryBuyer",
                    "type": "STRING"
                },
                "289": {
                    "name": "MDEntrySeller",
                    "type": "STRING"
                },
                "290": {
                    "name": "MDEntryPositionNo",
                    "type": "INT"
                },
                "291": {
                    "name": "FinancialStatus",
                    "type": "MULTIPLEVALUESTRING",
                    "values": {
                        "1": "BANKRUPT",
                        "2": "PENDING_DELISTING"
                    }
                },
                "292": {
                    "name": "CorporateAction",
                    "type": "MULTIPLEVALUESTRING",
                    "values": {
                        "A": "EX_DIVIDEND",
                        "B": "EX_DISTRIBUTION",
                        "C": "EX_RIGHTS",
                        "D": "NEW",
                        "E": "EX_INTEREST"
                    }
                },
                "293": {
                    "name": "DefBidSize",
                    "type": "QTY"
                },
                "294": {
                    "name": "DefOfferSize",
                    "type": "QTY"
                },
                "295": {
                    "name": "NoQuoteEntries",
                    "type": "NUMINGROUP"
                },
                "296": {
                    "name": "NoQuoteSets",
                    "type": "NUMINGROUP"
                },
                "297": {
                    "name": "QuoteStatus",
                    "type": "INT",
                    "values": {
                        "0": "ACCEPTED",
                        "1": "CANCELED_FOR_SYMBOL",
                        "2": "CANCELED_FOR_SECURITY_TYPE",
                        "3": "CANCELED_FOR_UNDERLYING",
                        "4": "CANCELED_ALL",
                        "5": "REJECTED",
                        "6": "REMOVED_FROM_MARKET",
                        "7": "EXPIRED",
                        "8": "QUERY",
                        "9": "QUOTE_NOT_FOUND",
                        "10": "PENDING",
                        "11": "PASS",
                        "12": "LOCKED_MARKET_WARNING",
                        "13": "CROSS_MARKET_WARNING",
                        "14": "CANCELED_DUE_TO_LOCK_MARKET",
                        "15": "CANCELED_DUE_TO_CROSS_MARKET"
                    }
                },
                "298": {
                    "name": "QuoteCancelType",
                    "type": "INT",
                    "values": {
                        "1": "CANCEL_FOR_SYMBOL",
                        "2": "CANCEL_FOR_SECURITY_TYPE",
                        "3": "CANCEL_FOR_UNDERLYING_SYMBOL",
                        "4": "CANCEL_ALL_QUOTES"
                    }
                },
                "299": {
                    "name": "QuoteEntryID",
                    "type": "STRING"
                },
                "300": {
                    "name": "QuoteRejectReason",
                    "type": "INT",
                    "values": {
                        "1": "UNKNOWN_SYMBOL",
                        "2": "EXCHANGE_CLOSED",
                        "3": "QUOTE_REQUEST_EXCEEDS_LIMIT",
                        "4": "TOO_LATE_TO_ENTER",
                        "5": "UNKNOWN_QUOTE",
                        "6": "DUPLICATE_QUOTE",
                        "7": "INVALID_BID_ASK_SPREAD",
                        "8": "INVALID_PRICE",
                        "9": "NOT_AUTHORIZED_TO_QUOTE_SECURITY"
                    }
                },
                "301": {
                    "name": "QuoteResponseLevel",
                    "type": "INT",
                    "values": {
                        "0": "NO_ACKNOWLEDGEMENT",
                        "1": "ACKNOWLEDGE_ONLY_NEGATIVE_OR_ERRONEOUS_QUOTES",
                        "2": "ACKNOWLEDGE_EACH_QUOTE_MESSAGES"
                    }
                },
                "302": {
                    "name": "QuoteSetID",
                    "type": "STRING"
                },
                "303": {
                    "name": "QuoteRequestType",
                    "type": "INT",
                    "values": {
                        "1": "MANUAL",
                        "2": "AUTOMATIC"
                    }
                },
                "304": {
                    "name": "TotNoQuoteEntries",
                    "type": "INT"
                },
                "305": {
                    "name": "UnderlyingSecurityIDSource",
                    "type": "STRING"
                },
                "306": {
                    "name": "UnderlyingIssuer",
                    "type": "STRING"
                },
                "307": {
                    "name": "UnderlyingSecurityDesc",
                    "type": "STRING"
                },
                "308": {
                    "name": "UnderlyingSecurityExchange",
                    "type": "EXCHANGE"
                },
                "309": {
                    "name": "UnderlyingSecurityID",
                    "type": "STRING"
                },
                "310": {
                    "name": "UnderlyingSecurityType",
                    "type": "STRING"
                },
                "311": {
                    "name": "UnderlyingSymbol",
                    "type": "STRING"
                },
                "312": {
                    "name": "UnderlyingSymbolSfx",
                    "type": "STRING"
                },
                "313": {
                    "name": "UnderlyingMaturityMonthYear",
                    "type": "MONTHYEAR"
                },
                "316": {
                    "name": "UnderlyingStrikePrice",
                    "type": "PRICE"
                },
                "317": {
                    "name": "UnderlyingOptAttribute",
                    "type": "CHAR"
                },
                "318": {
                    "name": "UnderlyingCurrency",
                    "type": "CURRENCY"
                },
                "320": {
                    "name": "SecurityReqID",
                    "type": "STRING"
                },
                "321": {
                    "name": "SecurityRequestType",
                    "type": "INT",
                    "values": {
                        "0": "REQUEST_SECURITY_IDENTITY_AND_SPECIFICATIONS",
                        "1": "REQUEST_SECURITY_IDENTITY_FOR_THE_SPECIFICATIONS_PROVIDED",
                        "2": "REQUEST_LIST_SECURITY_TYPES",
                        "3": "REQUEST_LIST_SECURITIES"
                    }
                },
                "322": {
                    "name": "SecurityResponseID",
                    "type": "STRING"
                },
                "323": {
                    "name": "SecurityResponseType",
                    "type": "INT",
                    "values": {
                        "1": "ACCEPT_SECURITY_PROPOSAL_AS_IS",
                        "2": "ACCEPT_SECURITY_PROPOSAL_WITH_REVISIONS_AS_INDICATED_IN_THE_MESSAGE",
                        "3": "LIST_OF_SECURITY_TYPES_RETURNED_PER_REQUEST",
                        "4": "LIST_OF_SECURITIES_RETURNED_PER_REQUEST",
                        "5": "REJECT_SECURITY_PROPOSAL",
                        "6": "CAN_NOT_MATCH_SELECTION_CRITERIA"
                    }
                },
                "324": {
                    "name": "SecurityStatusReqID",
                    "type": "STRING"
                },
                "325": {
                    "name": "UnsolicitedIndicator",
                    "type": "BOOLEAN"
                },
                "326": {
                    "name": "SecurityTradingStatus",
                    "type": "INT",
                    "values": {
                        "1": "OPENING_DELAY",
                        "2": "TRADING_HALT",
                        "3": "RESUME",
                        "4": "NO_OPEN_NO_RESUME",
                        "5": "PRICE_INDICATION",
                        "6": "TRADING_RANGE_INDICATION",
                        "7": "MARKET_IMBALANCE_BUY",
                        "8": "MARKET_IMBALANCE_SELL",
                        "9": "MARKET_ON_CLOSE_IMBALANCE_BUY",
                        "10": "MARKET_ON_CLOSE_IMBALANCE_SELL",
                        "11": "NOT_ASSIGNED",
                        "12": "NO_MARKET_IMBALANCE",
                        "13": "NO_MARKET_ON_CLOSE_IMBALANCE",
                        "14": "ITS_PRE_OPENING",
                        "15": "NEW_PRICE_INDICATION",
                        "16": "TRADE_DISSEMINATION_TIME",
                        "17": "READY_TO_TRADE_START_OF_SESSION",
                        "18": "NOT_AVAILABLE_FOR_TRADING_END_OF_SESSION",
                        "19": "NOT_TRADED_ON_THIS_MARKET",
                        "20": "UNKNOWN_OR_INVALID",
                        "21": "PRE_OPEN",
                        "22": "OPENING_ROTATION",
                        "23": "FAST_MARKET"
                    }
                },
                "327": {
                    "name": "HaltReason",
                    "type": "CHAR",
                    "values": {
                        "I": "ORDER_IMBALANCE",
                        "X": "EQUIPMENT_CHANGEOVER",
                        "P": "NEWS_PENDING",
                        "D": "NEWS_DISSEMINATION",
                        "E": "ORDER_INFLUX",
                        "M": "ADDITIONAL_INFORMATION"
                    }
                },
                "328": {
                    "name": "InViewOfCommon",
                    "type": "BOOLEAN"
                },
                "329": {
                    "name": "DueToRelated",
                    "type": "BOOLEAN"
                },
                "330": {
                    "name": "BuyVolume",
                    "type": "QTY"
                },
                "331": {
                    "name": "SellVolume",
                    "type": "QTY"
                },
                "332": {
                    "name": "HighPx",
                    "type": "PRICE"
                },
                "333": {
                    "name": "LowPx",
                    "type": "PRICE"
                },
                "334": {
                    "name": "Adjustment",
                    "type": "INT",
                    "values": {
                        "1": "CANCEL",
                        "2": "ERROR",
                        "3": "CORRECTION"
                    }
                },
                "335": {
                    "name": "TradSesReqID",
                    "type": "STRING"
                },
                "336": {
                    "name": "TradingSessionID",
                    "type": "STRING"
                },
                "337": {
                    "name": "ContraTrader",
                    "type": "STRING"
                },
                "338": {
                    "name": "TradSesMethod",
                    "type": "INT",
                    "values": {
                        "1": "ELECTRONIC",
                        "2": "OPEN_OUTCRY",
                        "3": "TWO_PARTY"
                    }
                },
                "339": {
                    "name": "TradSesMode",
                    "type": "INT",
                    "values": {
                        "1": "TESTING",
                        "2": "SIMULATED",
                        "3": "PRODUCTION"
                    }
                },
                "340": {
                    "name": "TradSesStatus",
                    "type": "INT",
                    "values": {
                        "0": "UNKNOWN",
                        "1": "HALTED",
                        "2": "OPEN",
                        "3": "CLOSED",
                        "4": "PRE_OPEN",
                        "5": "PRE_CLOSE",
                        "6": "REQUEST_REJECTED"
                    }
                },
                "341": {
                    "name": "TradSesStartTime",
                    "type": "UTCTIMESTAMP"
                },
                "342": {
                    "name": "TradSesOpenTime",
                    "type": "UTCTIMESTAMP"
                },
                "343": {
                    "name": "TradSesPreCloseTime",
                    "type": "UTCTIMESTAMP"
                },
                "344": {
                    "name": "TradSesCloseTime",
                    "type": "UTCTIMESTAMP"
                },
                "345": {
                    "name": "TradSesEndTime",
                    "type": "UTCTIMESTAMP"
                },
                "346": {
                    "name": "NumberOfOrders",
                    "type": "INT"
                },
                "347": {
                    "name": "MessageEncoding",
                    "type": "STRING",
                    "values": {
                        "ISO-2022-JP": "ISO_2022_JP",
                        "EUC-JP": "EUC_JP",
                        "SHIFT_JIS": "SHIFT_JIS",
                        "UTF-8": "UTF_8"
                    }
                },
                "348": {
                    "name": "EncodedIssuerLen",
                    "type": "LENGTH"
                },
                "349": {
                    "name": "EncodedIssuer",
                    "type": "DATA"
                },
                "350": {
                    "name": "EncodedSecurityDescLen",
                    "type": "LENGTH"
                },
                "351": {
                    "name": "EncodedSecurityDesc",
                    "type": "DATA"
                },
                "352": {
                    "name": "EncodedListExecInstLen",
                    "type": "LENGTH"
                },
                "353": {
                    "name": "EncodedListExecInst",
                    "type": "DATA"
                },
                "354": {
                    "name": "EncodedTextLen",
                    "type": "LENGTH"
                },
                "355": {
                    "name": "EncodedText",
                    "type": "DATA"
                },
                "356": {
                    "name": "EncodedSubjectLen",
                    "type": "LENGTH"
                },
                "357": {
                    "name": "EncodedSubject",
                    "type": "DATA"
                },
                "358": {
                    "name": "EncodedHeadlineLen",
                    "type": "LENGTH"
                },
                "359": {
                    "name": "EncodedHeadline",
                    "type": "DATA"
                },
                "360": {
                    "name": "EncodedAllocTextLen",
                    "type": "LENGTH"
                },
                "361": {
                    "name": "EncodedAllocText",
                    "type": "DATA"
                },
                "362": {
                    "name": "EncodedUnderlyingIssuerLen",
                    "type": "LENGTH"
                },
                "363": {
                    "name": "EncodedUnderlyingIssuer",
                    "type": "DATA"
                },
                "364": {
                    "name": "EncodedUnderlyingSecurityDescLen",
                    "type": "LENGTH"
                },
                "365": {
                    "name": "EncodedUnderlyingSecurityDesc",
                    "type": "DATA"
                },
                "366": {
                    "name": "AllocPrice",
                    "type": "PRICE"
                },
                "367": {
                    "name": "QuoteSetValidUntilTime",
                    "type": "UTCTIMESTAMP"
                },
                "368": {
                    "name": "QuoteEntryRejectReason",
                    "type": "INT",
                    "values": {
                        "1": "UNKNOWN_SYMBOL",
                        "2": "EXCHANGE_CLOSED",
                        "3": "QUOTE_EXCEEDS_LIMIT",
                        "4": "TOO_LATE_TO_ENTER",
                        "5": "UNKNOWN_QUOTE",
                        "6": "DUPLICATE_QUOTE",
                        "7": "INVALID_BID_ASK_SPREAD",
                        "8": "INVALID_PRICE",
                        "9": "NOT_AUTHORIZED_TO_QUOTE_SECURITY"
                    }
                },
                "369": {
                    "name": "LastMsgSeqNumProcessed",
                    "type": "SEQNUM"
                },
                "371": {
                    "name": "RefTagID",
                    "type": "INT"
                },
                "372": {
                    "name": "RefMsgType",
                    "type": "STRING"
                },
                "373": {
                    "name": "SessionRejectReason",
                    "type": "INT",
                    "values": {
                        "0": "INVALID_TAG_NUMBER",
                        "1": "REQUIRED_TAG_MISSING",
                        "2": "TAG_NOT_DEFINED_FOR_THIS_MESSAGE_TYPE",
                        "3": "UNDEFINED_TAG",
                        "4": "TAG_SPECIFIED_WITHOUT_A_VALUE",
                        "5": "VALUE_IS_INCORRECT",
                        "6": "INCORRECT_DATA_FORMAT_FOR_VALUE",
                        "7": "DECRYPTION_PROBLEM",
                        "8": "SIGNATURE_PROBLEM",
                        "9": "COMPID_PROBLEM",
                        "10": "SENDINGTIME_ACCURACY_PROBLEM",
                        "11": "INVALID_MSGTYPE",
                        "12": "XML_VALIDATION_ERROR",
                        "13": "TAG_APPEARS_MORE_THAN_ONCE",
                        "14": "TAG_SPECIFIED_OUT_OF_REQUIRED_ORDER",
                        "15": "REPEATING_GROUP_FIELDS_OUT_OF_ORDER",
                        "16": "INCORRECT_NUMINGROUP_COUNT_FOR_REPEATING_GROUP",
                        "17": "NON_DATA_VALUE_INCLUDES_FIELD_DELIMITER",
                        "99": "OTHER"
                    }
                },
                "374": {
                    "name": "BidRequestTransType",
                    "type": "CHAR",
                    "values": {
                        "N": "NEW",
                        "C": "CANCEL"
                    }
                },
                "375": {
                    "name": "ContraBroker",
                    "type": "STRING"
                },
                "376": {
                    "name": "ComplianceID",
                    "type": "STRING"
                },
                "377": {
                    "name": "SolicitedFlag",
                    "type": "BOOLEAN"
                },
                "378": {
                    "name": "ExecRestatementReason",
                    "type": "INT",
                    "values": {
                        "0": "GT_CORPORATE_ACTION",
                        "1": "GT_RENEWAL_RESTATEMENT",
                        "2": "VERBAL_CHANGE",
                        "3": "REPRICING_OF_ORDER",
                        "4": "BROKER_OPTION",
                        "5": "PARTIAL_DECLINE_OF_ORDERQTY",
                        "6": "CANCEL_ON_TRADING_HALT",
                        "7": "CANCEL_ON_SYSTEM_FAILURE",
                        "8": "MARKET_OPTION",
                        "9": "CANCELED_NOT_BEST"
                    }
                },
                "379": {
                    "name": "BusinessRejectRefID",
                    "type": "STRING"
                },
                "380": {
                    "name": "BusinessRejectReason",
                    "type": "INT",
                    "values": {
                        "0": "OTHER",
                        "1": "UNKOWN_ID",
                        "2": "UNKNOWN_SECURITY",
                        "3": "UNSUPPORTED_MESSAGE_TYPE",
                        "4": "APPLICATION_NOT_AVAILABLE",
                        "5": "CONDITIONALLY_REQUIRED_FIELD_MISSING",
                        "6": "NOT_AUTHORIZED",
                        "7": "DELIVERTO_FIRM_NOT_AVAILABLE_AT_THIS_TIME"
                    }
                },
                "381": {
                    "name": "GrossTradeAmt",
                    "type": "AMT"
                },
                "382": {
                    "name": "NoContraBrokers",
                    "type": "NUMINGROUP"
                },
                "383": {
                    "name": "MaxMessageSize",
                    "type": "LENGTH"
                },
                "384": {
                    "name": "NoMsgTypes",
                    "type": "NUMINGROUP"
                },
                "385": {
                    "name": "MsgDirection",
                    "type": "CHAR",
                    "values": {
                        "S": "SEND",
                        "R": "RECEIVE"
                    }
                },
                "386": {
                    "name": "NoTradingSessions",
                    "type": "NUMINGROUP"
                },
                "387": {
                    "name": "TotalVolumeTraded",
                    "type": "QTY"
                },
                "388": {
                    "name": "DiscretionInst",
                    "type": "CHAR",
                    "values": {
                        "0": "RELATED_TO_DISPLAYED_PRICE",
                        "1": "RELATED_TO_MARKET_PRICE",
                        "2": "RELATED_TO_PRIMARY_PRICE",
                        "3": "RELATED_TO_LOCAL_PRIMARY_PRICE",
                        "4": "RELATED_TO_MIDPOINT_PRICE",
                        "5": "RELATED_TO_LAST_TRADE_PRICE",
                        "6": "RELATED_TO_VWAP"
                    }
                },
                "389": {
                    "name": "DiscretionOffsetValue",
                    "type": "FLOAT"
                },
                "390": {
                    "name": "BidID",
                    "type": "STRING"
                },
                "391": {
                    "name": "ClientBidID",
                    "type": "STRING"
                },
                "392": {
                    "name": "ListName",
                    "type": "STRING"
                },
                "393": {
                    "name": "TotNoRelatedSym",
                    "type": "INT"
                },
                "394": {
                    "name": "BidType",
                    "type": "INT",
                    "values": {
                        "1": "NON_DISCLOSED",
                        "2": "DISCLOSED_STYLE",
                        "3": "NO_BIDDING_PROCESS"
                    }
                },
                "395": {
                    "name": "NumTickets",
                    "type": "INT"
                },
                "396": {
                    "name": "SideValue1",
                    "type": "AMT"
                },
                "397": {
                    "name": "SideValue2",
                    "type": "AMT"
                },
                "398": {
                    "name": "NoBidDescriptors",
                    "type": "NUMINGROUP"
                },
                "399": {
                    "name": "BidDescriptorType",
                    "type": "INT",
                    "values": {
                        "1": "SECTOR",
                        "2": "COUNTRY",
                        "3": "INDEX"
                    }
                },
                "400": {
                    "name": "BidDescriptor",
                    "type": "STRING"
                },
                "401": {
                    "name": "SideValueInd",
                    "type": "INT",
                    "values": {
                        "1": "SIDEVALUE1",
                        "2": "SIDEVALUE2"
                    }
                },
                "402": {
                    "name": "LiquidityPctLow",
                    "type": "PERCENTAGE"
                },
                "403": {
                    "name": "LiquidityPctHigh",
                    "type": "PERCENTAGE"
                },
                "404": {
                    "name": "LiquidityValue",
                    "type": "AMT"
                },
                "405": {
                    "name": "EFPTrackingError",
                    "type": "PERCENTAGE"
                },
                "406": {
                    "name": "FairValue",
                    "type": "AMT"
                },
                "407": {
                    "name": "OutsideIndexPct",
                    "type": "PERCENTAGE"
                },
                "408": {
                    "name": "ValueOfFutures",
                    "type": "AMT"
                },
                "409": {
                    "name": "LiquidityIndType",
                    "type": "INT",
                    "values": {
                        "1": "FIVEDAY_MOVING_AVERAGE",
                        "2": "TWENTYDAY_MOVING_AVERAGE",
                        "3": "NORMAL_MARKET_SIZE",
                        "4": "OTHER"
                    }
                },
                "410": {
                    "name": "WtAverageLiquidity",
                    "type": "PERCENTAGE"
                },
                "411": {
                    "name": "ExchangeForPhysical",
                    "type": "BOOLEAN"
                },
                "412": {
                    "name": "OutMainCntryUIndex",
                    "type": "AMT"
                },
                "413": {
                    "name": "CrossPercent",
                    "type": "PERCENTAGE"
                },
                "414": {
                    "name": "ProgRptReqs",
                    "type": "INT",
                    "values": {
                        "1": "BUYSIDE_EXPLICITLY_REQUESTS_STATUS_USING_STATUSREQUEST",
                        "2": "SELLSIDE_PERIODICALLY_SENDS_STATUS_USING_LISTSTATUS",
                        "3": "REAL_TIME_EXECUTION_REPORTS"
                    }
                },
                "415": {
                    "name": "ProgPeriodInterval",
                    "type": "INT"
                },
                "416": {
                    "name": "IncTaxInd",
                    "type": "INT",
                    "values": {
                        "1": "NET",
                        "2": "GROSS"
                    }
                },
                "417": {
                    "name": "NumBidders",
                    "type": "INT"
                },
                "418": {
                    "name": "BidTradeType",
                    "type": "CHAR",
                    "values": {
                        "R": "RISK_TRADE",
                        "G": "VWAP_GUARANTEE",
                        "A": "AGENCY",
                        "J": "GUARANTEED_CLOSE"
                    }
                },
                "419": {
                    "name": "BasisPxType",
                    "type": "CHAR",
                    "values": {
                        "2": "CLOSING_PRICE_AT_MORNING_SESSION",
                        "3": "CLOSING_PRICE",
                        "4": "CURRENT_PRICE",
                        "5": "SQ",
                        "6": "VWAP_THROUGH_A_DAY",
                        "7": "VWAP_THROUGH_A_MORNING_SESSION",
                        "8": "VWAP_THROUGH_AN_AFTERNOON_SESSION",
                        "9": "VWAP_THROUGH_A_DAY_EXCEPT_YORI",
                        "A": "VWAP_THROUGH_A_MORNING_SESSION_EXCEPT_YORI",
                        "B": "VWAP_THROUGH_AN_AFTERNOON_SESSION_EXCEPT_YORI",
                        "C": "STRIKE",
                        "D": "OPEN",
                        "Z": "OTHERS"
                    }
                },
                "420": {
                    "name": "NoBidComponents",
                    "type": "NUMINGROUP"
                },
                "421": {
                    "name": "Country",
                    "type": "COUNTRY"
                },
                "422": {
                    "name": "TotNoStrikes",
                    "type": "INT"
                },
                "423": {
                    "name": "PriceType",
                    "type": "INT",
                    "values": {
                        "1": "PERCENTAGE",
                        "2": "PER_UNIT",
                        "3": "FIXED_AMOUNT",
                        "4": "DISCOUNT",
                        "5": "PREMIUM",
                        "6": "SPREAD",
                        "7": "TED_PRICE",
                        "8": "TED_YIELD",
                        "9": "YIELD"
                    }
                },
                "424": {
                    "name": "DayOrderQty",
                    "type": "QTY"
                },
                "425": {
                    "name": "DayCumQty",
                    "type": "QTY"
                },
                "426": {
                    "name": "DayAvgPx",
                    "type": "PRICE"
                },
                "427": {
                    "name": "GTBookingInst",
                    "type": "INT",
                    "values": {
                        "0": "BOOK_OUT_ALL_TRADES_ON_DAY_OF_EXECUTION",
                        "1": "ACCUMULATE_EXECUTIONS_UNTIL_ORDER_IS_FILLED_OR_EXPIRES",
                        "2": "ACCUMULATE_UNTIL_VERBALLY_NOTIFIED_OTHERWISE"
                    }
                },
                "428": {
                    "name": "NoStrikes",
                    "type": "NUMINGROUP"
                },
                "429": {
                    "name": "ListStatusType",
                    "type": "INT",
                    "values": {
                        "1": "ACK",
                        "2": "RESPONSE",
                        "3": "TIMED",
                        "4": "EXECSTARTED",
                        "5": "ALLDONE",
                        "6": "ALERT"
                    }
                },
                "430": {
                    "name": "NetGrossInd",
                    "type": "INT",
                    "values": {
                        "1": "NET",
                        "2": "GROSS"
                    }
                },
                "431": {
                    "name": "ListOrderStatus",
                    "type": "INT",
                    "values": {
                        "1": "INBIDDINGPROCESS",
                        "2": "RECEIVEDFOREXECUTION",
                        "3": "EXECUTING",
                        "4": "CANCELING",
                        "5": "ALERT",
                        "6": "ALL_DONE",
                        "7": "REJECT"
                    }
                },
                "432": {
                    "name": "ExpireDate",
                    "type": "LOCALMKTDATE"
                },
                "433": {
                    "name": "ListExecInstType",
                    "type": "CHAR",
                    "values": {
                        "1": "IMMEDIATE",
                        "2": "WAIT_FOR_EXECUTE_INSTRUCTION",
                        "3": "EXCHANGE_SWITCH_CIV_ORDER_SELL_DRIVEN",
                        "4": "EXCHANGE_SWITCH_CIV_ORDER_BUY_DRIVEN_CASH_TOP_UP",
                        "5": "EXCHANGE_SWITCH_CIV_ORDER_BUY_DRIVEN_CASH_WITHDRAW"
                    }
                },
                "434": {
                    "name": "CxlRejResponseTo",
                    "type": "CHAR",
                    "values": {
                        "1": "ORDER_CANCEL_REQUEST",
                        "2": "ORDER_CANCEL_REPLACE_REQUEST"
                    }
                },
                "435": {
                    "name": "UnderlyingCouponRate",
                    "type": "PERCENTAGE"
                },
                "436": {
                    "name": "UnderlyingContractMultiplier",
                    "type": "FLOAT"
                },
                "437": {
                    "name": "ContraTradeQty",
                    "type": "QTY"
                },
                "438": {
                    "name": "ContraTradeTime",
                    "type": "UTCTIMESTAMP"
                },
                "441": {
                    "name": "LiquidityNumSecurities",
                    "type": "INT"
                },
                "442": {
                    "name": "MultiLegReportingType",
                    "type": "CHAR",
                    "values": {
                        "1": "SINGLE_SECURITY",
                        "2": "INDIVIDUAL_LEG_OF_A_MULTI_LEG_SECURITY",
                        "3": "MULTI_LEG_SECURITY"
                    }
                },
                "443": {
                    "name": "StrikeTime",
                    "type": "UTCTIMESTAMP"
                },
                "444": {
                    "name": "ListStatusText",
                    "type": "STRING"
                },
                "445": {
                    "name": "EncodedListStatusTextLen",
                    "type": "LENGTH"
                },
                "446": {
                    "name": "EncodedListStatusText",
                    "type": "DATA"
                },
                "447": {
                    "name": "PartyIDSource",
                    "type": "CHAR",
                    "values": {
                        "B": "BIC",
                        "C": "GENERALLY_ACCEPTED_MARKET_PARTICIPANT_IDENTIFIER",
                        "D": "PROPRIETARY_CUSTOM_CODE",
                        "E": "ISO_COUNTRY_CODE",
                        "F": "SETTLEMENT_ENTITY_LOCATION",
                        "G": "MIC",
                        "H": "CSD_PARTICIPANT_MEMBER_CODE",
                        "1": "KOREAN_INVESTOR_ID",
                        "2": "TAIWANESE_QUALIFIED_FOREIGN_INVESTOR_ID_QFII_FID",
                        "3": "TAIWANESE_TRADING_ACCOUNT",
                        "4": "MALAYSIAN_CENTRAL_DEPOSITORY_NUMBER",
                        "5": "CHINESE_B_SHARE",
                        "6": "UK_NATIONAL_INSURANCE_OR_PENSION_NUMBER",
                        "7": "US_SOCIAL_SECURITY_NUMBER",
                        "8": "US_EMPLOYER_IDENTIFICATION_NUMBER",
                        "9": "AUSTRALIAN_BUSINESS_NUMBER",
                        "A": "AUSTRALIAN_TAX_FILE_NUMBER",
                        "I": "DIRECTED_BROKER"
                    }
                },
                "448": {
                    "name": "PartyID",
                    "type": "STRING"
                },
                "451": {
                    "name": "NetChgPrevDay",
                    "type": "PRICEOFFSET"
                },
                "452": {
                    "name": "PartyRole",
                    "type": "INT",
                    "values": {
                        "1": "EXECUTING_FIRM",
                        "2": "BROKER_OF_CREDIT",
                        "3": "CLIENT_ID",
                        "4": "CLEARING_FIRM",
                        "5": "INVESTOR_ID",
                        "6": "INTRODUCING_FIRM",
                        "7": "ENTERING_FIRM",
                        "8": "LOCATE_LENDING_FIRM",
                        "9": "FUND_MANAGER_CLIENT_ID",
                        "10": "SETTLEMENT_LOCATION",
                        "11": "ORDER_ORIGINATION_TRADER",
                        "12": "EXECUTING_TRADER",
                        "13": "ORDER_ORIGINATION_FIRM",
                        "14": "GIVEUP_CLEARING_FIRM",
                        "15": "CORRESPONDANT_CLEARING_FIRM",
                        "16": "EXECUTING_SYSTEM",
                        "17": "CONTRA_FIRM",
                        "18": "CONTRA_CLEARING_FIRM",
                        "19": "SPONSORING_FIRM",
                        "20": "UNDERLYING_CONTRA_FIRM",
                        "21": "CLEARING_ORGANIZATION",
                        "22": "EXCHANGE",
                        "24": "CUSTOMER_ACCOUNT",
                        "25": "CORRESPONDENT_CLEARING_ORGANIZATION",
                        "26": "CORRESPONDENT_BROKER",
                        "27": "BUYER_SELLER",
                        "28": "CUSTODIAN",
                        "29": "INTERMEDIARY",
                        "30": "AGENT",
                        "31": "SUB_CUSTODIAN",
                        "32": "BENEFICIARY",
                        "33": "INTERESTED_PARTY",
                        "34": "REGULATORY_BODY",
                        "35": "LIQUIDITY_PROVIDER",
                        "36": "ENTERING_TRADER",
                        "37": "CONTRA_TRADER",
                        "38": "POSITION_ACCOUNT"
                    }
                },
                "453": {
                    "name": "NoPartyIDs",
                    "type": "NUMINGROUP"
                },
                "454": {
                    "name": "NoSecurityAltID",
                    "type": "NUMINGROUP"
                },
                "455": {
                    "name": "SecurityAltID",
                    "type": "STRING"
                },
                "456": {
                    "name": "SecurityAltIDSource",
                    "type": "STRING"
                },
                "457": {
                    "name": "NoUnderlyingSecurityAltID",
                    "type": "NUMINGROUP"
                },
                "458": {
                    "name": "UnderlyingSecurityAltID",
                    "type": "STRING"
                },
                "459": {
                    "name": "UnderlyingSecurityAltIDSource",
                    "type": "STRING"
                },
                "460": {
                    "name": "Product",
                    "type": "INT",
                    "values": {
                        "1": "AGENCY",
                        "2": "COMMODITY",
                        "3": "CORPORATE",
                        "4": "CURRENCY",
                        "5": "EQUITY",
                        "6": "GOVERNMENT",
                        "7": "INDEX",
                        "8": "LOAN",
                        "9": "MONEYMARKET",
                        "10": "MORTGAGE",
                        "11": "MUNICIPAL",
                        "12": "OTHER",
                        "13": "FINANCING"
                    }
                },
                "461": {
                    "name": "CFICode",
                    "type": "STRING"
                },
                "462": {
                    "name": "UnderlyingProduct",
                    "type": "INT"
                },
                "463": {
                    "name": "UnderlyingCFICode",
                    "type": "STRING"
                },
                "464": {
                    "name": "TestMessageIndicator",
                    "type": "BOOLEAN"
                },
                "465": {
                    "name": "QuantityType",
                    "type": "INT",
                    "values": {
                        "1": "SHARES",
                        "2": "BONDS",
                        "3": "CURRENTFACE",
                        "4": "ORIGINALFACE",
                        "5": "CURRENCY",
                        "6": "CONTRACTS",
                        "7": "OTHER",
                        "8": "PAR"
                    }
                },
                "466": {
                    "name": "BookingRefID",
                    "type": "STRING"
                },
                "467": {
                    "name": "IndividualAllocID",
                    "type": "STRING"
                },
                "468": {
                    "name": "RoundingDirection",
                    "type": "CHAR",
                    "values": {
                        "0": "ROUND_TO_NEAREST",
                        "1": "ROUND_DOWN",
                        "2": "ROUND_UP"
                    }
                },
                "469": {
                    "name": "RoundingModulus",
                    "type": "FLOAT"
                },
                "470": {
                    "name": "CountryOfIssue",
                    "type": "COUNTRY"
                },
                "471": {
                    "name": "StateOrProvinceOfIssue",
                    "type": "STRING"
                },
                "472": {
                    "name": "LocaleOfIssue",
                    "type": "STRING"
                },
                "473": {
                    "name": "NoRegistDtls",
                    "type": "NUMINGROUP"
                },
                "474": {
                    "name": "MailingDtls",
                    "type": "STRING"
                },
                "475": {
                    "name": "InvestorCountryOfResidence",
                    "type": "COUNTRY"
                },
                "476": {
                    "name": "PaymentRef",
                    "type": "STRING"
                },
                "477": {
                    "name": "DistribPaymentMethod",
                    "type": "INT",
                    "values": {
                        "1": "CREST",
                        "2": "NSCC",
                        "3": "EUROCLEAR",
                        "4": "CLEARSTREAM",
                        "5": "CHEQUE",
                        "6": "TELEGRAPHIC_TRANSFER",
                        "7": "FEDWIRE",
                        "8": "DIRECT_CREDIT",
                        "9": "ACH_CREDIT"
                    }
                },
                "478": {
                    "name": "CashDistribCurr",
                    "type": "CURRENCY"
                },
                "479": {
                    "name": "CommCurrency",
                    "type": "CURRENCY"
                },
                "480": {
                    "name": "CancellationRights",
                    "type": "CHAR",
                    "values": {
                        "N": "NO_EXECUTION_ONLY",
                        "M": "NO_WAIVER_AGREEMENT",
                        "O": "NO_INSTITUTIONAL"
                    }
                },
                "481": {
                    "name": "MoneyLaunderingStatus",
                    "type": "CHAR",
                    "values": {
                        "Y": "PASSED",
                        "N": "NOT_CHECKED",
                        "1": "EXEMPT_BELOW_THE_LIMIT",
                        "2": "EXEMPT_CLIENT_MONEY_TYPE_EXEMPTION",
                        "3": "EXEMPT_AUTHORISED_CREDIT_OR_FINANCIAL_INSTITUTION"
                    }
                },
                "482": {
                    "name": "MailingInst",
                    "type": "STRING"
                },
                "483": {
                    "name": "TransBkdTime",
                    "type": "UTCTIMESTAMP"
                },
                "484": {
                    "name": "ExecPriceType",
                    "type": "CHAR",
                    "values": {
                        "B": "BID_PRICE",
                        "C": "CREATION_PRICE",
                        "D": "CREATION_PRICE_PLUS_ADJUSTMENT_PERCENT",
                        "E": "CREATION_PRICE_PLUS_ADJUSTMENT_AMOUNT",
                        "O": "OFFER_PRICE",
                        "P": "OFFER_PRICE_MINUS_ADJUSTMENT_PERCENT",
                        "Q": "OFFER_PRICE_MINUS_ADJUSTMENT_AMOUNT",
                        "S": "SINGLE_PRICE"
                    }
                },
                "485": {
                    "name": "ExecPriceAdjustment",
                    "type": "FLOAT"
                },
                "486": {
                    "name": "DateOfBirth",
                    "type": "LOCALMKTDATE"
                },
                "487": {
                    "name": "TradeReportTransType",
                    "type": "INT",
                    "values": {
                        "0": "NEW",
                        "1": "CANCEL",
                        "2": "REPLACE",
                        "3": "RELEASE",
                        "4": "REVERSE"
                    }
                },
                "488": {
                    "name": "CardHolderName",
                    "type": "STRING"
                },
                "489": {
                    "name": "CardNumber",
                    "type": "STRING"
                },
                "490": {
                    "name": "CardExpDate",
                    "type": "LOCALMKTDATE"
                },
                "491": {
                    "name": "CardIssNum",
                    "type": "STRING"
                },
                "492": {
                    "name": "PaymentMethod",
                    "type": "INT",
                    "values": {
                        "1": "CREST",
                        "2": "NSCC",
                        "3": "EUROCLEAR",
                        "4": "CLEARSTREAM",
                        "5": "CHEQUE",
                        "6": "TELEGRAPHIC_TRANSFER",
                        "7": "FEDWIRE",
                        "8": "DEBIT_CARD",
                        "9": "DIRECT_DEBIT"
                    }
                },
                "493": {
                    "name": "RegistAcctType",
                    "type": "STRING"
                },
                "494": {
                    "name": "Designation",
                    "type": "STRING"
                },
                "495": {
                    "name": "TaxAdvantageType",
                    "type": "INT",
                    "values": {
                        "0": "NONE",
                        "1": "MAXI_ISA",
                        "2": "TESSA",
                        "3": "MINI_CASH_ISA",
                        "4": "MINI_STOCKS_AND_SHARES_ISA",
                        "5": "MINI_INSURANCE_ISA",
                        "6": "CURRENT_YEAR_PAYMENT",
                        "7": "PRIOR_YEAR_PAYMENT",
                        "8": "ASSET_TRANSFER",
                        "9": "EMPLOYEE_PRIOR_YEAR",
                        "999": "OTHER"
                    }
                },
                "496": {
                    "name": "RegistRejReasonText",
                    "type": "STRING"
                },
                "497": {
                    "name": "FundRenewWaiv",
                    "type": "CHAR",
                    "values": {
                        "Y": "YES",
                        "N": "NO"
                    }
                },
                "498": {
                    "name": "CashDistribAgentName",
                    "type": "STRING"
                },
                "499": {
                    "name": "CashDistribAgentCode",
                    "type": "STRING"
                },
                "500": {
                    "name": "CashDistribAgentAcctNumber",
                    "type": "STRING"
                },
                "501": {
                    "name": "CashDistribPayRef",
                    "type": "STRING"
                },
                "502": {
                    "name": "CashDistribAgentAcctName",
                    "type": "STRING"
                },
                "503": {
                    "name": "CardStartDate",
                    "type": "LOCALMKTDATE"
                },
                "504": {
                    "name": "PaymentDate",
                    "type": "LOCALMKTDATE"
                },
                "505": {
                    "name": "PaymentRemitterID",
                    "type": "STRING"
                },
                "506": {
                    "name": "RegistStatus",
                    "type": "CHAR",
                    "values": {
                        "A": "ACCEPTED",
                        "R": "REJECTED",
                        "H": "HELD",
                        "N": "REMINDER"
                    }
                },
                "507": {
                    "name": "RegistRejReasonCode",
                    "type": "INT",
                    "values": {
                        "1": "INVALID_UNACCEPTABLE_ACCOUNT_TYPE",
                        "2": "INVALID_UNACCEPTABLE_TAX_EXEMPT_TYPE",
                        "3": "INVALID_UNACCEPTABLE_OWNERSHIP_TYPE",
                        "4": "INVALID_UNACCEPTABLE_NO_REG_DETLS",
                        "5": "INVALID_UNACCEPTABLE_REG_SEQ_NO",
                        "6": "INVALID_UNACCEPTABLE_REG_DTLS",
                        "7": "INVALID_UNACCEPTABLE_MAILING_DTLS",
                        "8": "INVALID_UNACCEPTABLE_MAILING_INST",
                        "9": "INVALID_UNACCEPTABLE_INVESTOR_ID",
                        "10": "INVALID_UNACCEPTABLE_INVESTOR_ID_SOURCE",
                        "11": "INVALID_UNACCEPTABLE_DATE_OF_BIRTH",
                        "12": "INVALID_UNACCEPTABLE_INVESTOR_COUNTRY_OF_RESIDENCE",
                        "13": "INVALID_UNACCEPTABLE_NODISTRIBINSTNS",
                        "14": "INVALID_UNACCEPTABLE_DISTRIB_PERCENTAGE",
                        "15": "INVALID_UNACCEPTABLE_DISTRIB_PAYMENT_METHOD",
                        "16": "INVALID_UNACCEPTABLE_CASH_DISTRIB_AGENT_ACCT_NAME",
                        "17": "INVALID_UNACCEPTABLE_CASH_DISTRIB_AGENT_CODE",
                        "18": "INVALID_UNACCEPTABLE_CASH_DISTRIB_AGENT_ACCT_NUM",
                        "99": "OTHER"
                    }
                },
                "508": {
                    "name": "RegistRefID",
                    "type": "STRING"
                },
                "509": {
                    "name": "RegistDtls",
                    "type": "STRING"
                },
                "510": {
                    "name": "NoDistribInsts",
                    "type": "NUMINGROUP"
                },
                "511": {
                    "name": "RegistEmail",
                    "type": "STRING"
                },
                "512": {
                    "name": "DistribPercentage",
                    "type": "PERCENTAGE"
                },
                "513": {
                    "name": "RegistID",
                    "type": "STRING"
                },
                "514": {
                    "name": "RegistTransType",
                    "type": "CHAR",
                    "values": {
                        "0": "NEW",
                        "1": "REPLACE",
                        "2": "CANCEL"
                    }
                },
                "515": {
                    "name": "ExecValuationPoint",
                    "type": "UTCTIMESTAMP"
                },
                "516": {
                    "name": "OrderPercent",
                    "type": "PERCENTAGE"
                },
                "517": {
                    "name": "OwnershipType",
                    "type": "CHAR",
                    "values": {
                        "J": "JOINT_INVESTORS",
                        "T": "TENANTS_IN_COMMON",
                        "2": "JOINT_TRUSTEES"
                    }
                },
                "518": {
                    "name": "NoContAmts",
                    "type": "NUMINGROUP"
                },
                "519": {
                    "name": "ContAmtType",
                    "type": "INT",
                    "values": {
                        "1": "COMMISSION_AMOUNT",
                        "2": "COMMISSION_PERCENT",
                        "3": "INITIAL_CHARGE_AMOUNT",
                        "4": "INITIAL_CHARGE_PERCENT",
                        "5": "DISCOUNT_AMOUNT",
                        "6": "DISCOUNT_PERCENT",
                        "7": "DILUTION_LEVY_AMOUNT",
                        "8": "DILUTION_LEVY_PERCENT",
                        "9": "EXIT_CHARGE_AMOUNT"
                    }
                },
                "520": {
                    "name": "ContAmtValue",
                    "type": "FLOAT"
                },
                "521": {
                    "name": "ContAmtCurr",
                    "type": "CURRENCY"
                },
                "522": {
                    "name": "OwnerType",
                    "type": "INT",
                    "values": {
                        "1": "INDIVIDUAL_INVESTOR",
                        "2": "PUBLIC_COMPANY",
                        "3": "PRIVATE_COMPANY",
                        "4": "INDIVIDUAL_TRUSTEE",
                        "5": "COMPANY_TRUSTEE",
                        "6": "PENSION_PLAN",
                        "7": "CUSTODIAN_UNDER_GIFTS_TO_MINORS_ACT",
                        "8": "TRUSTS",
                        "9": "FIDUCIARIES"
                    }
                },
                "523": {
                    "name": "PartySubID",
                    "type": "STRING"
                },
                "524": {
                    "name": "NestedPartyID",
                    "type": "STRING"
                },
                "525": {
                    "name": "NestedPartyIDSource",
                    "type": "CHAR"
                },
                "526": {
                    "name": "SecondaryClOrdID",
                    "type": "STRING"
                },
                "527": {
                    "name": "SecondaryExecID",
                    "type": "STRING"
                },
                "528": {
                    "name": "OrderCapacity",
                    "type": "CHAR",
                    "values": {
                        "A": "AGENCY",
                        "G": "PROPRIETARY",
                        "I": "INDIVIDUAL",
                        "P": "PRINCIPAL",
                        "R": "RISKLESS_PRINCIPAL",
                        "W": "AGENT_FOR_OTHER_MEMBER"
                    }
                },
                "529": {
                    "name": "OrderRestrictions",
                    "type": "MULTIPLEVALUESTRING",
                    "values": {
                        "1": "PROGRAM_TRADE",
                        "2": "INDEX_ARBITRAGE",
                        "3": "NON_INDEX_ARBITRAGE",
                        "4": "COMPETING_MARKET_MAKER",
                        "5": "ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_SECURITY",
                        "6": "ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_UNDERLYING_SECURITY_OF_A_DERIVATIVE_SECURITY",
                        "7": "FOREIGN_ENTITY",
                        "8": "EXTERNAL_MARKET_PARTICIPANT",
                        "9": "EXTERNAL_INTER_CONNECTED_MARKET_LINKAGE",
                        "A": "RISKLESS_ARBITRAGE"
                    }
                },
                "530": {
                    "name": "MassCancelRequestType",
                    "type": "CHAR",
                    "values": {
                        "1": "CANCEL_ORDERS_FOR_A_SECURITY",
                        "2": "CANCEL_ORDERS_FOR_AN_UNDERLYING_SECURITY",
                        "3": "CANCEL_ORDERS_FOR_A_PRODUCT",
                        "4": "CANCEL_ORDERS_FOR_A_CFICODE",
                        "5": "CANCEL_ORDERS_FOR_A_SECURITYTYPE",
                        "6": "CANCEL_ORDERS_FOR_A_TRADING_SESSION",
                        "7": "CANCEL_ALL_ORDERS"
                    }
                },
                "531": {
                    "name": "MassCancelResponse",
                    "type": "CHAR",
                    "values": {
                        "0": "CANCEL_REQUEST_REJECTED",
                        "1": "CANCEL_ORDERS_FOR_A_SECURITY",
                        "2": "CANCEL_ORDERS_FOR_AN_UNDERLYING_SECURITY",
                        "3": "CANCEL_ORDERS_FOR_A_PRODUCT",
                        "4": "CANCEL_ORDERS_FOR_A_CFICODE",
                        "5": "CANCEL_ORDERS_FOR_A_SECURITYTYPE",
                        "6": "CANCEL_ORDERS_FOR_A_TRADING_SESSION",
                        "7": "CANCEL_ALL_ORDERS"
                    }
                },
                "532": {
                    "name": "MassCancelRejectReason",
                    "type": "CHAR",
                    "values": {
                        "0": "MASS_CANCEL_NOT_SUPPORTED",
                        "1": "INVALID_OR_UNKNOWN_SECURITY",
                        "2": "INVALID_OR_UNKNOWN_UNDERLYING",
                        "3": "INVALID_OR_UNKNOWN_PRODUCT",
                        "4": "INVALID_OR_UNKNOWN_CFICODE",
                        "5": "INVALID_OR_UNKNOWN_SECURITY_TYPE",
                        "6": "INVALID_OR_UNKNOWN_TRADING_SESSION"
                    }
                },
                "533": {
                    "name": "TotalAffectedOrders",
                    "type": "INT"
                },
                "534": {
                    "name": "NoAffectedOrders",
                    "type": "INT"
                },
                "535": {
                    "name": "AffectedOrderID",
                    "type": "STRING"
                },
                "536": {
                    "name": "AffectedSecondaryOrderID",
                    "type": "STRING"
                },
                "537": {
                    "name": "QuoteType",
                    "type": "INT",
                    "values": {
                        "0": "INDICATIVE",
                        "1": "TRADEABLE",
                        "2": "RESTRICTED_TRADEABLE",
                        "3": "COUNTER"
                    }
                },
                "538": {
                    "name": "NestedPartyRole",
                    "type": "INT"
                },
                "539": {
                    "name": "NoNestedPartyIDs",
                    "type": "NUMINGROUP"
                },
                "540": {
                    "name": "TotalAccruedInterestAmt",
                    "type": "AMT"
                },
                "541": {
                    "name": "MaturityDate",
                    "type": "LOCALMKTDATE"
                },
                "542": {
                    "name": "UnderlyingMaturityDate",
                    "type": "LOCALMKTDATE"
                },
                "543": {
                    "name": "InstrRegistry",
                    "type": "STRING"
                },
                "544": {
                    "name": "CashMargin",
                    "type": "CHAR",
                    "values": {
                        "1": "CASH",
                        "2": "MARGIN_OPEN",
                        "3": "MARGIN_CLOSE"
                    }
                },
                "545": {
                    "name": "NestedPartySubID",
                    "type": "STRING"
                },
                "546": {
                    "name": "Scope",
                    "type": "MULTIPLEVALUESTRING",
                    "values": {
                        "1": "LOCAL",
                        "2": "NATIONAL",
                        "3": "GLOBAL"
                    }
                },
                "547": {
                    "name": "MDImplicitDelete",
                    "type": "BOOLEAN"
                },
                "548": {
                    "name": "CrossID",
                    "type": "STRING"
                },
                "549": {
                    "name": "CrossType",
                    "type": "INT",
                    "values": {
                        "1": "CROSS_TRADE_WHICH_IS_EXECUTED_COMPLETELY_OR_NOT",
                        "2": "CROSS_TRADE_WHICH_IS_EXECUTED_PARTIALLY_AND_THE_REST_IS_CANCELLED",
                        "3": "CROSS_TRADE_WHICH_IS_PARTIALLY_EXECUTED_WITH_THE_UNFILLED_PORTIONS_REMAINING_ACTIVE",
                        "4": "CROSS_TRADE_IS_EXECUTED_WITH_EXISTING_ORDERS_WITH_THE_SAME_PRICE"
                    }
                },
                "550": {
                    "name": "CrossPrioritization",
                    "type": "INT",
                    "values": {
                        "0": "NONE",
                        "1": "BUY_SIDE_IS_PRIORITIZED",
                        "2": "SELL_SIDE_IS_PRIORITIZED"
                    }
                },
                "551": {
                    "name": "OrigCrossID",
                    "type": "STRING"
                },
                "552": {
                    "name": "NoSides",
                    "type": "NUMINGROUP",
                    "values": {
                        "1": "ONE_SIDE",
                        "2": "BOTH_SIDES"
                    }
                },
                "553": {
                    "name": "Username",
                    "type": "STRING"
                },
                "554": {
                    "name": "Password",
                    "type": "STRING"
                },
                "555": {
                    "name": "NoLegs",
                    "type": "NUMINGROUP"
                },
                "556": {
                    "name": "LegCurrency",
                    "type": "CURRENCY"
                },
                "557": {
                    "name": "TotNoSecurityTypes",
                    "type": "INT"
                },
                "558": {
                    "name": "NoSecurityTypes",
                    "type": "NUMINGROUP"
                },
                "559": {
                    "name": "SecurityListRequestType",
                    "type": "INT",
                    "values": {
                        "0": "SYMBOL",
                        "1": "SECURITYTYPE_AND_OR_CFICODE",
                        "2": "PRODUCT",
                        "3": "TRADINGSESSIONID",
                        "4": "ALL_SECURITIES"
                    }
                },
                "560": {
                    "name": "SecurityRequestResult",
                    "type": "INT",
                    "values": {
                        "0": "VALID_REQUEST",
                        "1": "INVALID_OR_UNSUPPORTED_REQUEST",
                        "2": "NO_INSTRUMENTS_FOUND_THAT_MATCH_SELECTION_CRITERIA",
                        "3": "NOT_AUTHORIZED_TO_RETRIEVE_INSTRUMENT_DATA",
                        "4": "INSTRUMENT_DATA_TEMPORARILY_UNAVAILABLE",
                        "5": "REQUEST_FOR_INSTRUMENT_DATA_NOT_SUPPORTED"
                    }
                },
                "561": {
                    "name": "RoundLot",
                    "type": "QTY"
                },
                "562": {
                    "name": "MinTradeVol",
                    "type": "QTY"
                },
                "563": {
                    "name": "MultiLegRptTypeReq",
                    "type": "INT",
                    "values": {
                        "0": "REPORT_BY_MULITLEG_SECURITY_ONLY",
                        "1": "REPORT_BY_MULTILEG_SECURITY_AND_BY_INSTRUMENT_LEGS_BELONGING_TO_THE_MULTILEG_SECURITY",
                        "2": "REPORT_BY_INSTRUMENT_LEGS_BELONGING_TO_THE_MULTILEG_SECURITY_ONLY"
                    }
                },
                "564": {
                    "name": "LegPositionEffect",
                    "type": "CHAR"
                },
                "565": {
                    "name": "LegCoveredOrUncovered",
                    "type": "INT"
                },
                "566": {
                    "name": "LegPrice",
                    "type": "PRICE"
                },
                "567": {
                    "name": "TradSesStatusRejReason",
                    "type": "INT",
                    "values": {
                        "1": "UNKNOWN_OR_INVALID_TRADINGSESSIONID"
                    }
                },
                "568": {
                    "name": "TradeRequestID",
                    "type": "STRING"
                },
                "569": {
                    "name": "TradeRequestType",
                    "type": "INT",
                    "values": {
                        "0": "ALL_TRADES",
                        "1": "MATCHED_TRADES_MATCHING_CRITERIA_PROVIDED_ON_REQUEST",
                        "2": "UNMATCHED_TRADES_THAT_MATCH_CRITERIA",
                        "3": "UNREPORTED_TRADES_THAT_MATCH_CRITERIA",
                        "4": "ADVISORIES_THAT_MATCH_CRITERIA"
                    }
                },
                "570": {
                    "name": "PreviouslyReported",
                    "type": "BOOLEAN"
                },
                "571": {
                    "name": "TradeReportID",
                    "type": "STRING"
                },
                "572": {
                    "name": "TradeReportRefID",
                    "type": "STRING"
                },
                "573": {
                    "name": "MatchStatus",
                    "type": "CHAR",
                    "values": {
                        "0": "COMPARED_MATCHED_OR_AFFIRMED",
                        "1": "UNCOMPARED_UNMATCHED_OR_UNAFFIRMED",
                        "2": "ADVISORY_OR_ALERT"
                    }
                },
                "574": {
                    "name": "MatchType",
                    "type": "STRING"
                },
                "575": {
                    "name": "OddLot",
                    "type": "BOOLEAN"
                },
                "576": {
                    "name": "NoClearingInstructions",
                    "type": "INT"
                },
                "577": {
                    "name": "ClearingInstruction",
                    "type": "INT",
                    "values": {
                        "0": "PROCESS_NORMALLY",
                        "1": "EXCLUDE_FROM_ALL_NETTING",
                        "2": "BILATERAL_NETTING_ONLY",
                        "3": "EX_CLEARING",
                        "4": "SPECIAL_TRADE",
                        "5": "MULTILATERAL_NETTING",
                        "6": "CLEAR_AGAINST_CENTRAL_COUNTERPARTY",
                        "7": "EXCLUDE_FROM_CENTRAL_COUNTERPARTY",
                        "8": "MANUAL_MODE",
                        "9": "AUTOMATIC_POSTING_MODE"
                    }
                },
                "578": {
                    "name": "TradeInputSource",
                    "type": "STRING"
                },
                "579": {
                    "name": "TradeInputDevice",
                    "type": "STRING"
                },
                "580": {
                    "name": "NoDates",
                    "type": "INT"
                },
                "581": {
                    "name": "AccountType",
                    "type": "INT",
                    "values": {
                        "1": "ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS",
                        "2": "ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS",
                        "3": "HOUSE_TRADER",
                        "4": "FLOOR_TRADER",
                        "6": "ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED",
                        "7": "ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED",
                        "8": "JOINT_BACKOFFICE_ACCOUNT"
                    }
                },
                "582": {
                    "name": "CustOrderCapacity",
                    "type": "INT",
                    "values": {
                        "1": "MEMBER_TRADING_FOR_THEIR_OWN_ACCOUNT",
                        "2": "CLEARING_FIRM_TRADING_FOR_ITS_PROPRIETARY_ACCOUNT",
                        "3": "MEMBER_TRADING_FOR_ANOTHER_MEMBER",
                        "4": "ALL_OTHER"
                    }
                },
                "583": {
                    "name": "ClOrdLinkID",
                    "type": "STRING"
                },
                "584": {
                    "name": "MassStatusReqID",
                    "type": "STRING"
                },
                "585": {
                    "name": "MassStatusReqType",
                    "type": "INT",
                    "values": {
                        "1": "STATUS_FOR_ORDERS_FOR_A_SECURITY",
                        "2": "STATUS_FOR_ORDERS_FOR_AN_UNDERLYING_SECURITY",
                        "3": "STATUS_FOR_ORDERS_FOR_A_PRODUCT",
                        "4": "STATUS_FOR_ORDERS_FOR_A_CFICODE",
                        "5": "STATUS_FOR_ORDERS_FOR_A_SECURITYTYPE",
                        "6": "STATUS_FOR_ORDERS_FOR_A_TRADING_SESSION",
                        "7": "STATUS_FOR_ALL_ORDERS",
                        "8": "STATUS_FOR_ORDERS_FOR_A_PARTYID"
                    }
                },
                "586": {
                    "name": "OrigOrdModTime",
                    "type": "UTCTIMESTAMP"
                },
                "587": {
                    "name": "LegSettlType",
                    "type": "CHAR"
                },
                "588": {
                    "name": "LegSettlDate",
                    "type": "LOCALMKTDATE"
                },
                "589": {
                    "name": "DayBookingInst",
                    "type": "CHAR",
                    "values": {
                        "0": "CAN_TRIGGER_BOOKING_WITHOUT_REFERENCE_TO_THE_ORDER_INITIATOR",
                        "1": "SPEAK_WITH_ORDER_INITIATOR_BEFORE_BOOKING",
                        "2": "ACCUMULATE"
                    }
                },
                "590": {
                    "name": "BookingUnit",
                    "type": "CHAR",
                    "values": {
                        "0": "EACH_PARTIAL_EXECUTION_IS_A_BOOKABLE_UNIT",
                        "1": "AGGREGATE_PARTIAL_EXECUTIONS_ON_THIS_ORDER_AND_BOOK_ONE_TRADE_PER_ORDER",
                        "2": "AGGREGATE_EXECUTIONS_FOR_THIS_SYMBOL_SIDE_AND_SETTLEMENT_DATE"
                    }
                },
                "591": {
                    "name": "PreallocMethod",
                    "type": "CHAR",
                    "values": {
                        "0": "PRO_RATA",
                        "1": "DO_NOT_PRO_RATA"
                    }
                },
                "592": {
                    "name": "UnderlyingCountryOfIssue",
                    "type": "COUNTRY"
                },
                "593": {
                    "name": "UnderlyingStateOrProvinceOfIssue",
                    "type": "STRING"
                },
                "594": {
                    "name": "UnderlyingLocaleOfIssue",
                    "type": "STRING"
                },
                "595": {
                    "name": "UnderlyingInstrRegistry",
                    "type": "STRING"
                },
                "596": {
                    "name": "LegCountryOfIssue",
                    "type": "COUNTRY"
                },
                "597": {
                    "name": "LegStateOrProvinceOfIssue",
                    "type": "STRING"
                },
                "598": {
                    "name": "LegLocaleOfIssue",
                    "type": "STRING"
                },
                "599": {
                    "name": "LegInstrRegistry",
                    "type": "STRING"
                },
                "600": {
                    "name": "LegSymbol",
                    "type": "STRING"
                },
                "601": {
                    "name": "LegSymbolSfx",
                    "type": "STRING"
                },
                "602": {
                    "name": "LegSecurityID",
                    "type": "STRING"
                },
                "603": {
                    "name": "LegSecurityIDSource",
                    "type": "STRING"
                },
                "604": {
                    "name": "NoLegSecurityAltID",
                    "type": "STRING"
                },
                "605": {
                    "name": "LegSecurityAltID",
                    "type": "STRING"
                },
                "606": {
                    "name": "LegSecurityAltIDSource",
                    "type": "STRING"
                },
                "607": {
                    "name": "LegProduct",
                    "type": "INT"
                },
                "608": {
                    "name": "LegCFICode",
                    "type": "STRING"
                },
                "609": {
                    "name": "LegSecurityType",
                    "type": "STRING"
                },
                "610": {
                    "name": "LegMaturityMonthYear",
                    "type": "MONTHYEAR"
                },
                "611": {
                    "name": "LegMaturityDate",
                    "type": "LOCALMKTDATE"
                },
                "612": {
                    "name": "LegStrikePrice",
                    "type": "PRICE"
                },
                "613": {
                    "name": "LegOptAttribute",
                    "type": "CHAR"
                },
                "614": {
                    "name": "LegContractMultiplier",
                    "type": "FLOAT"
                },
                "615": {
                    "name": "LegCouponRate",
                    "type": "PERCENTAGE"
                },
                "616": {
                    "name": "LegSecurityExchange",
                    "type": "EXCHANGE"
                },
                "617": {
                    "name": "LegIssuer",
                    "type": "STRING"
                },
                "618": {
                    "name": "EncodedLegIssuerLen",
                    "type": "LENGTH"
                },
                "619": {
                    "name": "EncodedLegIssuer",
                    "type": "DATA"
                },
                "620": {
                    "name": "LegSecurityDesc",
                    "type": "STRING"
                },
                "621": {
                    "name": "EncodedLegSecurityDescLen",
                    "type": "LENGTH"
                },
                "622": {
                    "name": "EncodedLegSecurityDesc",
                    "type": "DATA"
                },
                "623": {
                    "name": "LegRatioQty",
                    "type": "FLOAT"
                },
                "624": {
                    "name": "LegSide",
                    "type": "CHAR"
                },
                "625": {
                    "name": "TradingSessionSubID",
                    "type": "STRING"
                },
                "626": {
                    "name": "AllocType",
                    "type": "INT",
                    "values": {
                        "1": "CALCULATED",
                        "2": "PRELIMINARY",
                        "5": "READY_TO_BOOK_SINGLE_ORDER",
                        "7": "WAREHOUSE_INSTRUCTION",
                        "8": "REQUEST_TO_INTERMEDIARY"
                    }
                },
                "627": {
                    "name": "NoHops",
                    "type": "NUMINGROUP"
                },
                "628": {
                    "name": "HopCompID",
                    "type": "STRING"
                },
                "629": {
                    "name": "HopSendingTime",
                    "type": "UTCTIMESTAMP"
                },
                "630": {
                    "name": "HopRefID",
                    "type": "SEQNUM"
                },
                "631": {
                    "name": "MidPx",
                    "type": "PRICE"
                },
                "632": {
                    "name": "BidYield",
                    "type": "PERCENTAGE"
                },
                "633": {
                    "name": "MidYield",
                    "type": "PERCENTAGE"
                },
                "634": {
                    "name": "OfferYield",
                    "type": "PERCENTAGE"
                },
                "635": {
                    "name": "ClearingFeeIndicator",
                    "type": "STRING",
                    "values": {
                        "B": "CBOE_MEMBER",
                        "C": "NON_MEMBER_AND_CUSTOMER",
                        "E": "EQUITY_MEMBER_AND_CLEARING_MEMBER",
                        "F": "FULL_AND_ASSOCIATE_MEMBER_TRADING_FOR_OWN_ACCOUNT_AND_AS_FLOOR_BROKERS",
                        "H": "FIRMS_106H_AND_106J",
                        "I": "GIM_IDEM_AND_COM_MEMBERSHIP_INTEREST_HOLDERS",
                        "L": "LESSEE_AND_106F_EMPLOYEES",
                        "M": "ALL_OTHER_OWNERSHIP_TYPES"
                    }
                },
                "636": {
                    "name": "WorkingIndicator",
                    "type": "BOOLEAN"
                },
                "637": {
                    "name": "LegLastPx",
                    "type": "PRICE"
                },
                "638": {
                    "name": "PriorityIndicator",
                    "type": "INT",
                    "values": {
                        "0": "PRIORITY_UNCHANGED",
                        "1": "LOST_PRIORITY_AS_RESULT_OF_ORDER_CHANGE"
                    }
                },
                "639": {
                    "name": "PriceImprovement",
                    "type": "PRICEOFFSET"
                },
                "640": {
                    "name": "Price2",
                    "type": "PRICE"
                },
                "641": {
                    "name": "LastForwardPoints2",
                    "type": "PRICEOFFSET"
                },
                "642": {
                    "name": "BidForwardPoints2",
                    "type": "PRICEOFFSET"
                },
                "643": {
                    "name": "OfferForwardPoints2",
                    "type": "PRICEOFFSET"
                },
                "644": {
                    "name": "RFQReqID",
                    "type": "STRING"
                },
                "645": {
                    "name": "MktBidPx",
                    "type": "PRICE"
                },
                "646": {
                    "name": "MktOfferPx",
                    "type": "PRICE"
                },
                "647": {
                    "name": "MinBidSize",
                    "type": "QTY"
                },
                "648": {
                    "name": "MinOfferSize",
                    "type": "QTY"
                },
                "649": {
                    "name": "QuoteStatusReqID",
                    "type": "STRING"
                },
                "650": {
                    "name": "LegalConfirm",
                    "type": "BOOLEAN"
                },
                "651": {
                    "name": "UnderlyingLastPx",
                    "type": "PRICE"
                },
                "652": {
                    "name": "UnderlyingLastQty",
                    "type": "QTY"
                },
                "654": {
                    "name": "LegRefID",
                    "type": "STRING"
                },
                "655": {
                    "name": "ContraLegRefID",
                    "type": "STRING"
                },
                "656": {
                    "name": "SettlCurrBidFxRate",
                    "type": "FLOAT"
                },
                "657": {
                    "name": "SettlCurrOfferFxRate",
                    "type": "FLOAT"
                },
                "658": {
                    "name": "QuoteRequestRejectReason",
                    "type": "INT",
                    "values": {
                        "1": "UNKNOWN_SYMBOL",
                        "2": "EXCHANGE_CLOSED",
                        "3": "QUOTE_REQUEST_EXCEEDS_LIMIT",
                        "4": "TOO_LATE_TO_ENTER",
                        "5": "INVALID_PRICE",
                        "6": "NOT_AUTHORIZED_TO_REQUEST_QUOTE",
                        "7": "NO_MATCH_FOR_INQUIRY",
                        "8": "NO_MARKET_FOR_INSTRUMENT",
                        "9": "NO_INVENTORY",
                        "10": "PASS",
                        "99": "OTHER"
                    }
                },
                "659": {
                    "name": "SideComplianceID",
                    "type": "STRING"
                },
                "660": {
                    "name": "AcctIDSource",
                    "type": "INT",
                    "values": {
                        "1": "BIC",
                        "2": "SID_CODE",
                        "3": "TFM",
                        "4": "OMGEO",
                        "5": "DTCC_CODE"
                    }
                },
                "661": {
                    "name": "AllocAcctIDSource",
                    "type": "INT"
                },
                "662": {
                    "name": "BenchmarkPrice",
                    "type": "PRICE"
                },
                "663": {
                    "name": "BenchmarkPriceType",
                    "type": "INT"
                },
                "664": {
                    "name": "ConfirmID",
                    "type": "STRING"
                },
                "665": {
                    "name": "ConfirmStatus",
                    "type": "INT",
                    "values": {
                        "1": "RECEIVED",
                        "2": "MISMATCHED_ACCOUNT",
                        "3": "MISSING_SETTLEMENT_INSTRUCTIONS",
                        "4": "CONFIRMED",
                        "5": "REQUEST_REJECTED"
                    }
                },
                "666": {
                    "name": "ConfirmTransType",
                    "type": "INT",
                    "values": {
                        "0": "NEW",
                        "1": "REPLACE",
                        "2": "CANCEL"
                    }
                },
                "667": {
                    "name": "ContractSettlMonth",
                    "type": "MONTHYEAR"
                },
                "668": {
                    "name": "DeliveryForm",
                    "type": "INT",
                    "values": {
                        "1": "BOOKENTRY",
                        "2": "BEARER"
                    }
                },
                "669": {
                    "name": "LastParPx",
                    "type": "PRICE"
                },
                "670": {
                    "name": "NoLegAllocs",
                    "type": "NUMINGROUP"
                },
                "671": {
                    "name": "LegAllocAccount",
                    "type": "STRING"
                },
                "672": {
                    "name": "LegIndividualAllocID",
                    "type": "STRING"
                },
                "673": {
                    "name": "LegAllocQty",
                    "type": "QTY"
                },
                "674": {
                    "name": "LegAllocAcctIDSource",
                    "type": "STRING"
                },
                "675": {
                    "name": "LegSettlCurrency",
                    "type": "CURRENCY"
                },
                "676": {
                    "name": "LegBenchmarkCurveCurrency",
                    "type": "CURRENCY"
                },
                "677": {
                    "name": "LegBenchmarkCurveName",
                    "type": "STRING"
                },
                "678": {
                    "name": "LegBenchmarkCurvePoint",
                    "type": "STRING"
                },
                "679": {
                    "name": "LegBenchmarkPrice",
                    "type": "PRICE"
                },
                "680": {
                    "name": "LegBenchmarkPriceType",
                    "type": "INT"
                },
                "681": {
                    "name": "LegBidPx",
                    "type": "PRICE"
                },
                "682": {
                    "name": "LegIOIQty",
                    "type": "STRING"
                },
                "683": {
                    "name": "NoLegStipulations",
                    "type": "NUMINGROUP"
                },
                "684": {
                    "name": "LegOfferPx",
                    "type": "PRICE"
                },
                "685": {
                    "name": "LegOrderQty",
                    "type": "QTY"
                },
                "686": {
                    "name": "LegPriceType",
                    "type": "INT"
                },
                "687": {
                    "name": "LegQty",
                    "type": "QTY"
                },
                "688": {
                    "name": "LegStipulationType",
                    "type": "STRING"
                },
                "689": {
                    "name": "LegStipulationValue",
                    "type": "STRING"
                },
                "690": {
                    "name": "LegSwapType",
                    "type": "INT",
                    "values": {
                        "1": "PAR_FOR_PAR",
                        "2": "MODIFIED_DURATION",
                        "4": "RISK",
                        "5": "PROCEEDS"
                    }
                },
                "691": {
                    "name": "Pool",
                    "type": "STRING"
                },
                "692": {
                    "name": "QuotePriceType",
                    "type": "INT",
                    "values": {
                        "1": "PERCENT",
                        "2": "PER_SHARE",
                        "3": "FIXED_AMOUNT",
                        "4": "DISCOUNT",
                        "5": "PREMIUM",
                        "6": "BASIS_POINTS_RELATIVE_TO_BENCHMARK",
                        "7": "TED_PRICE",
                        "8": "TED_YIELD",
                        "9": "YIELD_SPREAD"
                    }
                },
                "693": {
                    "name": "QuoteRespID",
                    "type": "STRING"
                },
                "694": {
                    "name": "QuoteRespType",
                    "type": "INT",
                    "values": {
                        "1": "HIT_LIFT",
                        "2": "COUNTER",
                        "3": "EXPIRED",
                        "4": "COVER",
                        "5": "DONE_AWAY",
                        "6": "PASS"
                    }
                },
                "695": {
                    "name": "QuoteQualifier",
                    "type": "CHAR"
                },
                "696": {
                    "name": "YieldRedemptionDate",
                    "type": "LOCALMKTDATE"
                },
                "697": {
                    "name": "YieldRedemptionPrice",
                    "type": "PRICE"
                },
                "698": {
                    "name": "YieldRedemptionPriceType",
                    "type": "INT"
                },
                "699": {
                    "name": "BenchmarkSecurityID",
                    "type": "STRING"
                },
                "700": {
                    "name": "ReversalIndicator",
                    "type": "BOOLEAN"
                },
                "701": {
                    "name": "YieldCalcDate",
                    "type": "LOCALMKTDATE"
                },
                "702": {
                    "name": "NoPositions",
                    "type": "NUMINGROUP"
                },
                "703": {
                    "name": "PosType",
                    "type": "STRING",
                    "values": {
                        "TQ": "TRANSACTION_QUANTITY",
                        "IAS": "INTRA_SPREAD_QTY",
                        "IES": "INTER_SPREAD_QTY",
                        "FIN": "END_OF_DAY_QTY",
                        "SOD": "START_OF_DAY_QTY",
                        "EX": "OPTION_EXERCISE_QTY",
                        "AS": "OPTION_ASSIGNMENT",
                        "TX": "TRANSACTION_FROM_EXERCISE",
                        "TA": "TRANSACTION_FROM_ASSIGNMENT",
                        "PIT": "PIT_TRADE_QTY",
                        "TRF": "TRANSFER_TRADE_QTY",
                        "ETR": "ELECTRONIC_TRADE_QTY",
                        "ALC": "ALLOCATION_TRADE_QTY",
                        "PA": "ADJUSTMENT_QTY",
                        "ASF": "AS_OF_TRADE_QTY",
                        "DLV": "DELIVERY_QTY",
                        "TOT": "TOTAL_TRANSACTION_QTY",
                        "XM": "CROSS_MARGIN_QTY",
                        "SPL": "INTEGRAL_SPLIT"
                    }
                },
                "704": {
                    "name": "LongQty",
                    "type": "QTY"
                },
                "705": {
                    "name": "ShortQty",
                    "type": "QTY"
                },
                "706": {
                    "name": "PosQtyStatus",
                    "type": "INT",
                    "values": {
                        "0": "SUBMITTED",
                        "1": "ACCEPTED",
                        "2": "REJECTED"
                    }
                },
                "707": {
                    "name": "PosAmtType",
                    "type": "STRING",
                    "values": {
                        "FMTM": "FINAL_MARK_TO_MARKET_AMOUNT",
                        "IMTM": "INCREMENTAL_MARK_TO_MARKET_AMOUNT",
                        "TVAR": "TRADE_VARIATION_AMOUNT",
                        "SMTM": "START_OF_DAY_MARK_TO_MARKET_AMOUNT",
                        "PREM": "PREMIUM_AMOUNT",
                        "CRES": "CASH_RESIDUAL_AMOUNT",
                        "CASH": "CASH_AMOUNT",
                        "VADJ": "VALUE_ADJUSTED_AMOUNT"
                    }
                },
                "708": {
                    "name": "PosAmt",
                    "type": "AMT"
                },
                "709": {
                    "name": "PosTransType",
                    "type": "INT",
                    "values": {
                        "1": "EXERCISE",
                        "2": "DO_NOT_EXERCISE",
                        "3": "POSITION_ADJUSTMENT",
                        "4": "POSITION_CHANGE_SUBMISSION_MARGIN_DISPOSITION",
                        "5": "PLEDGE"
                    }
                },
                "710": {
                    "name": "PosReqID",
                    "type": "STRING"
                },
                "711": {
                    "name": "NoUnderlyings",
                    "type": "NUMINGROUP"
                },
                "712": {
                    "name": "PosMaintAction",
                    "type": "INT",
                    "values": {
                        "1": "NEW",
                        "2": "REPLACE",
                        "3": "CANCEL"
                    }
                },
                "713": {
                    "name": "OrigPosReqRefID",
                    "type": "STRING"
                },
                "714": {
                    "name": "PosMaintRptRefID",
                    "type": "STRING"
                },
                "715": {
                    "name": "ClearingBusinessDate",
                    "type": "LOCALMKTDATE"
                },
                "716": {
                    "name": "SettlSessID",
                    "type": "STRING"
                },
                "717": {
                    "name": "SettlSessSubID",
                    "type": "STRING"
                },
                "718": {
                    "name": "AdjustmentType",
                    "type": "INT",
                    "values": {
                        "0": "PROCESS_REQUEST_AS_MARGIN_DISPOSITION",
                        "1": "DELTA_PLUS",
                        "2": "DELTA_MINUS",
                        "3": "FINAL"
                    }
                },
                "719": {
                    "name": "ContraryInstructionIndicator",
                    "type": "BOOLEAN"
                },
                "720": {
                    "name": "PriorSpreadIndicator",
                    "type": "BOOLEAN"
                },
                "721": {
                    "name": "PosMaintRptID",
                    "type": "STRING"
                },
                "722": {
                    "name": "PosMaintStatus",
                    "type": "INT",
                    "values": {
                        "0": "ACCEPTED",
                        "1": "ACCEPTED_WITH_WARNINGS",
                        "2": "REJECTED",
                        "3": "COMPLETED",
                        "4": "COMPLETED_WITH_WARNINGS"
                    }
                },
                "723": {
                    "name": "PosMaintResult",
                    "type": "INT",
                    "values": {
                        "0": "SUCCESSFUL_COMPLETION_NO_WARNINGS_OR_ERRORS",
                        "1": "REJECTED"
                    }
                },
                "724": {
                    "name": "PosReqType",
                    "type": "INT",
                    "values": {
                        "0": "POSITIONS",
                        "1": "TRADES",
                        "2": "EXERCISES",
                        "3": "ASSIGNMENTS"
                    }
                },
                "725": {
                    "name": "ResponseTransportType",
                    "type": "INT",
                    "values": {
                        "0": "INBAND",
                        "1": "OUT_OF_BAND"
                    }
                },
                "726": {
                    "name": "ResponseDestination",
                    "type": "STRING"
                },
                "727": {
                    "name": "TotalNumPosReports",
                    "type": "INT"
                },
                "728": {
                    "name": "PosReqResult",
                    "type": "INT",
                    "values": {
                        "0": "VALID_REQUEST",
                        "1": "INVALID_OR_UNSUPPORTED_REQUEST",
                        "2": "NO_POSITIONS_FOUND_THAT_MATCH_CRITERIA",
                        "3": "NOT_AUTHORIZED_TO_REQUEST_POSITIONS",
                        "4": "REQUEST_FOR_POSITION_NOT_SUPPORTED",
                        "99": "OTHER"
                    }
                },
                "729": {
                    "name": "PosReqStatus",
                    "type": "INT",
                    "values": {
                        "0": "COMPLETED",
                        "1": "COMPLETED_WITH_WARNINGS",
                        "2": "REJECTED"
                    }
                },
                "730": {
                    "name": "SettlPrice",
                    "type": "PRICE"
                },
                "731": {
                    "name": "SettlPriceType",
                    "type": "INT",
                    "values": {
                        "1": "FINAL",
                        "2": "THEORETICAL"
                    }
                },
                "732": {
                    "name": "UnderlyingSettlPrice",
                    "type": "PRICE"
                },
                "733": {
                    "name": "UnderlyingSettlPriceType",
                    "type": "INT"
                },
                "734": {
                    "name": "PriorSettlPrice",
                    "type": "PRICE"
                },
                "735": {
                    "name": "NoQuoteQualifiers",
                    "type": "NUMINGROUP"
                },
                "736": {
                    "name": "AllocSettlCurrency",
                    "type": "CURRENCY"
                },
                "737": {
                    "name": "AllocSettlCurrAmt",
                    "type": "AMT"
                },
                "738": {
                    "name": "InterestAtMaturity",
                    "type": "AMT"
                },
                "739": {
                    "name": "LegDatedDate",
                    "type": "LOCALMKTDATE"
                },
                "740": {
                    "name": "LegPool",
                    "type": "STRING"
                },
                "741": {
                    "name": "AllocInterestAtMaturity",
                    "type": "AMT"
                },
                "742": {
                    "name": "AllocAccruedInterestAmt",
                    "type": "AMT"
                },
                "743": {
                    "name": "DeliveryDate",
                    "type": "LOCALMKTDATE"
                },
                "744": {
                    "name": "AssignmentMethod",
                    "type": "CHAR",
                    "values": {
                        "R": "RANDOM",
                        "P": "PRORATA"
                    }
                },
                "745": {
                    "name": "AssignmentUnit",
                    "type": "QTY"
                },
                "746": {
                    "name": "OpenInterest",
                    "type": "AMT"
                },
                "747": {
                    "name": "ExerciseMethod",
                    "type": "CHAR",
                    "values": {
                        "A": "AUTOMATIC",
                        "M": "MANUAL"
                    }
                },
                "748": {
                    "name": "TotNumTradeReports",
                    "type": "INT"
                },
                "749": {
                    "name": "TradeRequestResult",
                    "type": "INT",
                    "values": {
                        "0": "SUCCESSFUL",
                        "1": "INVALID_OR_UNKNOWN_INSTRUMENT",
                        "2": "INVALID_TYPE_OF_TRADE_REQUESTED",
                        "3": "INVALID_PARTIES",
                        "4": "INVALID_TRANSPORT_TYPE_REQUESTED",
                        "5": "INVALID_DESTINATION_REQUESTED",
                        "8": "TRADEREQUESTTYPE_NOT_SUPPORTED",
                        "9": "UNAUTHORIZED_FOR_TRADE_CAPTURE_REPORT_REQUEST"
                    }
                },
                "750": {
                    "name": "TradeRequestStatus",
                    "type": "INT",
                    "values": {
                        "0": "ACCEPTED",
                        "1": "COMPLETED",
                        "2": "REJECTED"
                    }
                },
                "751": {
                    "name": "TradeReportRejectReason",
                    "type": "INT",
                    "values": {
                        "0": "SUCCESSFUL",
                        "1": "INVALID_PARTY_INFORMATION",
                        "2": "UNKNOWN_INSTRUMENT",
                        "3": "UNAUTHORIZED_TO_REPORT_TRADES",
                        "4": "INVALID_TRADE_TYPE"
                    }
                },
                "752": {
                    "name": "SideMultiLegReportingType",
                    "type": "INT",
                    "values": {
                        "1": "SINGLE_SECURITY",
                        "2": "INDIVIDUAL_LEG_OF_A_MULTI_LEG_SECURITY",
                        "3": "MULTI_LEG_SECURITY"
                    }
                },
                "753": {
                    "name": "NoPosAmt",
                    "type": "NUMINGROUP"
                },
                "754": {
                    "name": "AutoAcceptIndicator",
                    "type": "BOOLEAN"
                },
                "755": {
                    "name": "AllocReportID",
                    "type": "STRING"
                },
                "756": {
                    "name": "NoNested2PartyIDs",
                    "type": "NUMINGROUP"
                },
                "757": {
                    "name": "Nested2PartyID",
                    "type": "STRING"
                },
                "758": {
                    "name": "Nested2PartyIDSource",
                    "type": "CHAR"
                },
                "759": {
                    "name": "Nested2PartyRole",
                    "type": "INT"
                },
                "760": {
                    "name": "Nested2PartySubID",
                    "type": "STRING"
                },
                "761": {
                    "name": "BenchmarkSecurityIDSource",
                    "type": "STRING",
                    "values": {
                        "1": "CUSIP",
                        "2": "SEDOL",
                        "3": "QUIK",
                        "4": "ISIN_NUMBER",
                        "5": "RIC_CODE",
                        "6": "ISO_CURRENCY_CODE",
                        "7": "ISO_COUNTRY_CODE",
                        "8": "EXCHANGE_SYMBOL",
                        "9": "CONSOLIDATED_TAPE_ASSOCIATION",
                        "A": "BLOOMBERG_SYMBOL",
                        "B": "WERTPAPIER",
                        "C": "DUTCH",
                        "D": "VALOREN",
                        "E": "SICOVAM",
                        "F": "BELGIAN",
                        "G": "COMMON",
                        "H": "CLEARING_HOUSE_CLEARING_ORGANIZATION",
                        "I": "ISDA_FPML_PRODUCT_SPECIFICATION",
                        "J": "OPTIONS_PRICE_REPORTING_AUTHORITY"
                    }
                },
                "762": {
                    "name": "SecuritySubType",
                    "type": "STRING"
                },
                "763": {
                    "name": "UnderlyingSecuritySubType",
                    "type": "STRING"
                },
                "764": {
                    "name": "LegSecuritySubType",
                    "type": "STRING"
                },
                "765": {
                    "name": "AllowableOneSidednessPct",
                    "type": "PERCENTAGE"
                },
                "766": {
                    "name": "AllowableOneSidednessValue",
                    "type": "AMT"
                },
                "767": {
                    "name": "AllowableOneSidednessCurr",
                    "type": "CURRENCY"
                },
                "768": {
                    "name": "NoTrdRegTimestamps",
                    "type": "NUMINGROUP"
                },
                "769": {
                    "name": "TrdRegTimestamp",
                    "type": "UTCTIMESTAMP"
                },
                "770": {
                    "name": "TrdRegTimestampType",
                    "type": "INT",
                    "values": {
                        "1": "EXECUTION_TIME",
                        "2": "TIME_IN",
                        "3": "TIME_OUT",
                        "4": "BROKER_RECEIPT",
                        "5": "BROKER_EXECUTION"
                    }
                },
                "771": {
                    "name": "TrdRegTimestampOrigin",
                    "type": "STRING"
                },
                "772": {
                    "name": "ConfirmRefID",
                    "type": "STRING"
                },
                "773": {
                    "name": "ConfirmType",
                    "type": "INT",
                    "values": {
                        "1": "STATUS",
                        "2": "CONFIRMATION",
                        "3": "CONFIRMATION_REQUEST_REJECTED"
                    }
                },
                "774": {
                    "name": "ConfirmRejReason",
                    "type": "INT",
                    "values": {
                        "1": "MISMATCHED_ACCOUNT",
                        "2": "MISSING_SETTLEMENT_INSTRUCTIONS"
                    }
                },
                "775": {
                    "name": "BookingType",
                    "type": "INT",
                    "values": {
                        "0": "REGULAR_BOOKING",
                        "1": "CFD",
                        "2": "TOTAL_RETURN_SWAP"
                    }
                },
                "776": {
                    "name": "IndividualAllocRejCode",
                    "type": "INT"
                },
                "777": {
                    "name": "SettlInstMsgID",
                    "type": "STRING"
                },
                "778": {
                    "name": "NoSettlInst",
                    "type": "NUMINGROUP"
                },
                "779": {
                    "name": "LastUpdateTime",
                    "type": "UTCTIMESTAMP"
                },
                "780": {
                    "name": "AllocSettlInstType",
                    "type": "INT",
                    "values": {
                        "0": "USE_DEFAULT_INSTRUCTIONS",
                        "1": "DERIVE_FROM_PARAMETERS_PROVIDED",
                        "2": "FULL_DETAILS_PROVIDED",
                        "3": "SSI_DB_IDS_PROVIDED",
                        "4": "PHONE_FOR_INSTRUCTIONS"
                    }
                },
                "781": {
                    "name": "NoSettlPartyIDs",
                    "type": "NUMINGROUP"
                },
                "782": {
                    "name": "SettlPartyID",
                    "type": "STRING"
                },
                "783": {
                    "name": "SettlPartyIDSource",
                    "type": "CHAR"
                },
                "784": {
                    "name": "SettlPartyRole",
                    "type": "INT"
                },
                "785": {
                    "name": "SettlPartySubID",
                    "type": "STRING"
                },
                "786": {
                    "name": "SettlPartySubIDType",
                    "type": "INT"
                },
                "787": {
                    "name": "DlvyInstType",
                    "type": "CHAR",
                    "values": {
                        "S": "SECURITIES",
                        "C": "CASH"
                    }
                },
                "788": {
                    "name": "TerminationType",
                    "type": "INT",
                    "values": {
                        "1": "OVERNIGHT",
                        "2": "TERM",
                        "3": "FLEXIBLE",
                        "4": "OPEN"
                    }
                },
                "789": {
                    "name": "NextExpectedMsgSeqNum",
                    "type": "SEQNUM"
                },
                "790": {
                    "name": "OrdStatusReqID",
                    "type": "STRING"
                },
                "791": {
                    "name": "SettlInstReqID",
                    "type": "STRING"
                },
                "792": {
                    "name": "SettlInstReqRejCode",
                    "type": "INT",
                    "values": {
                        "0": "UNABLE_TO_PROCESS_REQUEST",
                        "1": "UNKNOWN_ACCOUNT",
                        "2": "NO_MATCHING_SETTLEMENT_INSTRUCTIONS_FOUND"
                    }
                },
                "793": {
                    "name": "SecondaryAllocID",
                    "type": "STRING"
                },
                "794": {
                    "name": "AllocReportType",
                    "type": "INT",
                    "values": {
                        "3": "SELLSIDE_CALCULATED_USING_PRELIMINARY",
                        "4": "SELLSIDE_CALCULATED_WITHOUT_PRELIMINARY",
                        "5": "WAREHOUSE_RECAP",
                        "8": "REQUEST_TO_INTERMEDIARY"
                    }
                },
                "795": {
                    "name": "AllocReportRefID",
                    "type": "STRING"
                },
                "796": {
                    "name": "AllocCancReplaceReason",
                    "type": "INT",
                    "values": {
                        "1": "ORIGINAL_DETAILS_INCOMPLETE_INCORRECT",
                        "2": "CHANGE_IN_UNDERLYING_ORDER_DETAILS"
                    }
                },
                "797": {
                    "name": "CopyMsgIndicator",
                    "type": "BOOLEAN"
                },
                "798": {
                    "name": "AllocAccountType",
                    "type": "INT",
                    "values": {
                        "1": "ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS",
                        "2": "ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS",
                        "3": "HOUSE_TRADER",
                        "4": "FLOOR_TRADER",
                        "6": "ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED",
                        "7": "ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED",
                        "8": "JOINT_BACKOFFICE_ACCOUNT"
                    }
                },
                "799": {
                    "name": "OrderAvgPx",
                    "type": "PRICE"
                },
                "800": {
                    "name": "OrderBookingQty",
                    "type": "QTY"
                },
                "801": {
                    "name": "NoSettlPartySubIDs",
                    "type": "NUMINGROUP"
                },
                "802": {
                    "name": "NoPartySubIDs",
                    "type": "NUMINGROUP"
                },
                "803": {
                    "name": "PartySubIDType",
                    "type": "INT"
                },
                "804": {
                    "name": "NoNestedPartySubIDs",
                    "type": "NUMINGROUP"
                },
                "805": {
                    "name": "NestedPartySubIDType",
                    "type": "INT"
                },
                "806": {
                    "name": "NoNested2PartySubIDs",
                    "type": "NUMINGROUP"
                },
                "807": {
                    "name": "Nested2PartySubIDType",
                    "type": "INT"
                },
                "808": {
                    "name": "AllocIntermedReqType",
                    "type": "INT",
                    "values": {
                        "1": "PENDING_ACCEPT",
                        "2": "PENDING_RELEASE",
                        "3": "PENDING_REVERSAL",
                        "4": "ACCEPT",
                        "5": "BLOCK_LEVEL_REJECT",
                        "6": "ACCOUNT_LEVEL_REJECT"
                    }
                },
                "810": {
                    "name": "UnderlyingPx",
                    "type": "PRICE"
                },
                "811": {
                    "name": "PriceDelta",
                    "type": "FLOAT"
                },
                "812": {
                    "name": "ApplQueueMax",
                    "type": "INT"
                },
                "813": {
                    "name": "ApplQueueDepth",
                    "type": "INT"
                },
                "814": {
                    "name": "ApplQueueResolution",
                    "type": "INT",
                    "values": {
                        "0": "NO_ACTION_TAKEN",
                        "1": "QUEUE_FLUSHED",
                        "2": "OVERLAY_LAST",
                        "3": "END_SESSION"
                    }
                },
                "815": {
                    "name": "ApplQueueAction",
                    "type": "INT",
                    "values": {
                        "0": "NO_ACTION_TAKEN",
                        "1": "QUEUE_FLUSHED",
                        "2": "OVERLAY_LAST",
                        "3": "END_SESSION"
                    }
                },
                "816": {
                    "name": "NoAltMDSource",
                    "type": "NUMINGROUP"
                },
                "817": {
                    "name": "AltMDSourceID",
                    "type": "STRING"
                },
                "818": {
                    "name": "SecondaryTradeReportID",
                    "type": "STRING"
                },
                "819": {
                    "name": "AvgPxIndicator",
                    "type": "INT",
                    "values": {
                        "0": "NO_AVERAGE_PRICING",
                        "1": "TRADE_IS_PART_OF_AN_AVERAGE_PRICE_GROUP_IDENTIFIED_BY_THE_TRADELINKID",
                        "2": "LAST_TRADE_IN_THE_AVERAGE_PRICE_GROUP_IDENTIFIED_BY_THE_TRADELINKID"
                    }
                },
                "820": {
                    "name": "TradeLinkID",
                    "type": "STRING"
                },
                "821": {
                    "name": "OrderInputDevice",
                    "type": "STRING"
                },
                "822": {
                    "name": "UnderlyingTradingSessionID",
                    "type": "STRING"
                },
                "823": {
                    "name": "UnderlyingTradingSessionSubID",
                    "type": "STRING"
                },
                "824": {
                    "name": "TradeLegRefID",
                    "type": "STRING"
                },
                "825": {
                    "name": "ExchangeRule",
                    "type": "STRING"
                },
                "826": {
                    "name": "TradeAllocIndicator",
                    "type": "INT",
                    "values": {
                        "0": "ALLOCATION_NOT_REQUIRED",
                        "1": "ALLOCATION_REQUIRED",
                        "2": "USE_ALLOCATION_PROVIDED_WITH_THE_TRADE"
                    }
                },
                "827": {
                    "name": "ExpirationCycle",
                    "type": "INT",
                    "values": {
                        "0": "EXPIRE_ON_TRADING_SESSION_CLOSE",
                        "1": "EXPIRE_ON_TRADING_SESSION_OPEN"
                    }
                },
                "828": {
                    "name": "TrdType",
                    "type": "INT",
                    "values": {
                        "0": "REGULAR_TRADE",
                        "1": "BLOCK_TRADE",
                        "2": "EFP",
                        "3": "TRANSFER",
                        "4": "LATE_TRADE",
                        "5": "T_TRADE",
                        "6": "WEIGHTED_AVERAGE_PRICE_TRADE",
                        "7": "BUNCHED_TRADE",
                        "8": "LATE_BUNCHED_TRADE",
                        "9": "PRIOR_REFERENCE_PRICE_TRADE"
                    }
                },
                "829": {
                    "name": "TrdSubType",
                    "type": "INT"
                },
                "830": {
                    "name": "TransferReason",
                    "type": "STRING"
                },
                "831": {
                    "name": "AsgnReqID",
                    "type": "STRING"
                },
                "832": {
                    "name": "TotNumAssignmentReports",
                    "type": "INT"
                },
                "833": {
                    "name": "AsgnRptID",
                    "type": "STRING"
                },
                "834": {
                    "name": "ThresholdAmount",
                    "type": "PRICEOFFSET"
                },
                "835": {
                    "name": "PegMoveType",
                    "type": "INT",
                    "values": {
                        "0": "FLOATING",
                        "1": "FIXED"
                    }
                },
                "836": {
                    "name": "PegOffsetType",
                    "type": "INT",
                    "values": {
                        "0": "PRICE",
                        "1": "BASIS_POINTS",
                        "2": "TICKS",
                        "3": "PRICE_TIER_LEVEL"
                    }
                },
                "837": {
                    "name": "PegLimitType",
                    "type": "INT",
                    "values": {
                        "0": "OR_BETTER",
                        "1": "STRICT",
                        "2": "OR_WORSE"
                    }
                },
                "838": {
                    "name": "PegRoundDirection",
                    "type": "INT",
                    "values": {
                        "1": "MORE_AGGRESSIVE",
                        "2": "MORE_PASSIVE"
                    }
                },
                "839": {
                    "name": "PeggedPrice",
                    "type": "PRICE"
                },
                "840": {
                    "name": "PegScope",
                    "type": "INT",
                    "values": {
                        "1": "LOCAL",
                        "2": "NATIONAL",
                        "3": "GLOBAL",
                        "4": "NATIONAL_EXCLUDING_LOCAL"
                    }
                },
                "841": {
                    "name": "DiscretionMoveType",
                    "type": "INT",
                    "values": {
                        "0": "FLOATING",
                        "1": "FIXED"
                    }
                },
                "842": {
                    "name": "DiscretionOffsetType",
                    "type": "INT",
                    "values": {
                        "0": "PRICE",
                        "1": "BASIS_POINTS",
                        "2": "TICKS",
                        "3": "PRICE_TIER_LEVEL"
                    }
                },
                "843": {
                    "name": "DiscretionLimitType",
                    "type": "INT",
                    "values": {
                        "0": "OR_BETTER",
                        "1": "STRICT",
                        "2": "OR_WORSE"
                    }
                },
                "844": {
                    "name": "DiscretionRoundDirection",
                    "type": "INT",
                    "values": {
                        "1": "MORE_AGGRESSIVE",
                        "2": "MORE_PASSIVE"
                    }
                },
                "845": {
                    "name": "DiscretionPrice",
                    "type": "PRICE"
                },
                "846": {
                    "name": "DiscretionScope",
                    "type": "INT",
                    "values": {
                        "1": "LOCAL",
                        "2": "NATIONAL",
                        "3": "GLOBAL",
                        "4": "NATIONAL_EXCLUDING_LOCAL"
                    }
                },
                "847": {
                    "name": "TargetStrategy",
                    "type": "INT"
                },
                "848": {
                    "name": "TargetStrategyParameters",
                    "type": "STRING"
                },
                "849": {
                    "name": "ParticipationRate",
                    "type": "PERCENTAGE"
                },
                "850": {
                    "name": "TargetStrategyPerformance",
                    "type": "FLOAT"
                },
                "851": {
                    "name": "LastLiquidityInd",
                    "type": "INT",
                    "values": {
                        "1": "ADDED_LIQUIDITY",
                        "2": "REMOVED_LIQUIDITY",
                        "3": "LIQUIDITY_ROUTED_OUT"
                    }
                },
                "852": {
                    "name": "PublishTrdIndicator",
                    "type": "BOOLEAN"
                },
                "853": {
                    "name": "ShortSaleReason",
                    "type": "INT",
                    "values": {
                        "0": "DEALER_SOLD_SHORT",
                        "1": "DEALER_SOLD_SHORT_EXEMPT",
                        "2": "SELLING_CUSTOMER_SOLD_SHORT",
                        "3": "SELLING_CUSTOMER_SOLD_SHORT_EXEMPT",
                        "4": "QUALIFED_SERVICE_REPRESENTATIVE_OR_AUTOMATIC_GIVEUP_CONTRA_SIDE_SOLD_SHORT",
                        "5": "QSR_OR_AGU_CONTRA_SIDE_SOLD_SHORT_EXEMPT"
                    }
                },
                "854": {
                    "name": "QtyType",
                    "type": "INT",
                    "values": {
                        "0": "UNITS",
                        "1": "CONTRACTS"
                    }
                },
                "855": {
                    "name": "SecondaryTrdType",
                    "type": "INT"
                },
                "856": {
                    "name": "TradeReportType",
                    "type": "INT",
                    "values": {
                        "0": "SUBMIT",
                        "1": "ALLEGED",
                        "2": "ACCEPT",
                        "3": "DECLINE",
                        "4": "ADDENDUM",
                        "5": "NO_WAS",
                        "6": "TRADE_REPORT_CANCEL",
                        "7": "LOCKED_IN_TRADE_BREAK"
                    }
                },
                "857": {
                    "name": "AllocNoOrdersType",
                    "type": "INT",
                    "values": {
                        "0": "NOT_SPECIFIED",
                        "1": "EXPLICIT_LIST_PROVIDED"
                    }
                },
                "858": {
                    "name": "SharedCommission",
                    "type": "AMT"
                },
                "859": {
                    "name": "ConfirmReqID",
                    "type": "STRING"
                },
                "860": {
                    "name": "AvgParPx",
                    "type": "PRICE"
                },
                "861": {
                    "name": "ReportedPx",
                    "type": "PRICE"
                },
                "862": {
                    "name": "NoCapacities",
                    "type": "NUMINGROUP"
                },
                "863": {
                    "name": "OrderCapacityQty",
                    "type": "QTY"
                },
                "864": {
                    "name": "NoEvents",
                    "type": "NUMINGROUP"
                },
                "865": {
                    "name": "EventType",
                    "type": "INT",
                    "values": {
                        "1": "PUT",
                        "2": "CALL",
                        "3": "TENDER",
                        "4": "SINKING_FUND_CALL"
                    }
                },
                "866": {
                    "name": "EventDate",
                    "type": "LOCALMKTDATE"
                },
                "867": {
                    "name": "EventPx",
                    "type": "PRICE"
                },
                "868": {
                    "name": "EventText",
                    "type": "STRING"
                },
                "869": {
                    "name": "PctAtRisk",
                    "type": "PERCENTAGE"
                },
                "870": {
                    "name": "NoInstrAttrib",
                    "type": "NUMINGROUP"
                },
                "871": {
                    "name": "InstrAttribType",
                    "type": "INT",
                    "values": {
                        "1": "FLAT",
                        "2": "ZERO_COUPON",
                        "3": "INTEREST_BEARING",
                        "4": "NO_PERIODIC_PAYMENTS",
                        "5": "VARIABLE_RATE",
                        "6": "LESS_FEE_FOR_PUT",
                        "7": "STEPPED_COUPON",
                        "8": "COUPON_PERIOD",
                        "9": "WHEN_AND_IF_ISSUED",
                        "10": "ORIGINAL_ISSUE_DISCOUNT",
                        "11": "CALLABLE_PUTTABLE",
                        "12": "ESCROWED_TO_MATURITY",
                        "13": "ESCROWED_TO_REDEMPTION_DATE",
                        "14": "PRE_REFUNDED",
                        "15": "IN_DEFAULT",
                        "16": "UNRATED",
                        "17": "TAXABLE",
                        "18": "INDEXED",
                        "19": "SUBJECT_TO_ALTERNATIVE_MINIMUM_TAX",
                        "20": "ORIGINAL_ISSUE_DISCOUNT_PRICE",
                        "21": "CALLABLE_BELOW_MATURITY_VALUE",
                        "22": "CALLABLE_WITHOUT_NOTICE_BY_MAIL_TO_HOLDER_UNLESS_REGISTERED",
                        "99": "TEXT"
                    }
                },
                "872": {
                    "name": "InstrAttribValue",
                    "type": "STRING"
                },
                "873": {
                    "name": "DatedDate",
                    "type": "LOCALMKTDATE"
                },
                "874": {
                    "name": "InterestAccrualDate",
                    "type": "LOCALMKTDATE"
                },
                "875": {
                    "name": "CPProgram",
                    "type": "INT"
                },
                "876": {
                    "name": "CPRegType",
                    "type": "STRING"
                },
                "877": {
                    "name": "UnderlyingCPProgram",
                    "type": "STRING"
                },
                "878": {
                    "name": "UnderlyingCPRegType",
                    "type": "STRING"
                },
                "879": {
                    "name": "UnderlyingQty",
                    "type": "QTY"
                },
                "880": {
                    "name": "TrdMatchID",
                    "type": "STRING"
                },
                "881": {
                    "name": "SecondaryTradeReportRefID",
                    "type": "STRING"
                },
                "882": {
                    "name": "UnderlyingDirtyPrice",
                    "type": "PRICE"
                },
                "883": {
                    "name": "UnderlyingEndPrice",
                    "type": "PRICE"
                },
                "884": {
                    "name": "UnderlyingStartValue",
                    "type": "AMT"
                },
                "885": {
                    "name": "UnderlyingCurrentValue",
                    "type": "AMT"
                },
                "886": {
                    "name": "UnderlyingEndValue",
                    "type": "AMT"
                },
                "887": {
                    "name": "NoUnderlyingStips",
                    "type": "NUMINGROUP"
                },
                "888": {
                    "name": "UnderlyingStipType",
                    "type": "STRING"
                },
                "889": {
                    "name": "UnderlyingStipValue",
                    "type": "STRING"
                },
                "890": {
                    "name": "MaturityNetMoney",
                    "type": "AMT"
                },
                "891": {
                    "name": "MiscFeeBasis",
                    "type": "INT",
                    "values": {
                        "0": "ABSOLUTE",
                        "1": "PER_UNIT",
                        "2": "PERCENTAGE"
                    }
                },
                "892": {
                    "name": "TotNoAllocs",
                    "type": "INT"
                },
                "893": {
                    "name": "LastFragment",
                    "type": "BOOLEAN"
                },
                "894": {
                    "name": "CollReqID",
                    "type": "STRING"
                },
                "895": {
                    "name": "CollAsgnReason",
                    "type": "INT",
                    "values": {
                        "0": "INITIAL",
                        "1": "SCHEDULED",
                        "2": "TIME_WARNING",
                        "3": "MARGIN_DEFICIENCY",
                        "4": "MARGIN_EXCESS",
                        "5": "FORWARD_COLLATERAL_DEMAND",
                        "6": "EVENT_OF_DEFAULT",
                        "7": "ADVERSE_TAX_EVENT"
                    }
                },
                "896": {
                    "name": "CollInquiryQualifier",
                    "type": "INT",
                    "values": {
                        "0": "TRADEDATE",
                        "1": "GC_INSTRUMENT",
                        "2": "COLLATERALINSTRUMENT",
                        "3": "SUBSTITUTION_ELIGIBLE",
                        "4": "NOT_ASSIGNED",
                        "5": "PARTIALLY_ASSIGNED",
                        "6": "FULLY_ASSIGNED",
                        "7": "OUTSTANDING_TRADES"
                    }
                },
                "897": {
                    "name": "NoTrades",
                    "type": "NUMINGROUP"
                },
                "898": {
                    "name": "MarginRatio",
                    "type": "PERCENTAGE"
                },
                "899": {
                    "name": "MarginExcess",
                    "type": "AMT"
                },
                "900": {
                    "name": "TotalNetValue",
                    "type": "AMT"
                },
                "901": {
                    "name": "CashOutstanding",
                    "type": "AMT"
                },
                "902": {
                    "name": "CollAsgnID",
                    "type": "STRING"
                },
                "903": {
                    "name": "CollAsgnTransType",
                    "type": "INT",
                    "values": {
                        "0": "NEW",
                        "1": "REPLACE",
                        "2": "CANCEL",
                        "3": "RELEASE",
                        "4": "REVERSE"
                    }
                },
                "904": {
                    "name": "CollRespID",
                    "type": "STRING"
                },
                "905": {
                    "name": "CollAsgnRespType",
                    "type": "INT",
                    "values": {
                        "0": "RECEIVED",
                        "1": "ACCEPTED",
                        "2": "DECLINED",
                        "3": "REJECTED"
                    }
                },
                "906": {
                    "name": "CollAsgnRejectReason",
                    "type": "INT",
                    "values": {
                        "0": "UNKNOWN_DEAL",
                        "1": "UNKNOWN_OR_INVALID_INSTRUMENT",
                        "2": "UNAUTHORIZED_TRANSACTION",
                        "3": "INSUFFICIENT_COLLATERAL",
                        "4": "INVALID_TYPE_OF_COLLATERAL",
                        "5": "EXCESSIVE_SUBSTITUTION"
                    }
                },
                "907": {
                    "name": "CollAsgnRefID",
                    "type": "STRING"
                },
                "908": {
                    "name": "CollRptID",
                    "type": "STRING"
                },
                "909": {
                    "name": "CollInquiryID",
                    "type": "STRING"
                },
                "910": {
                    "name": "CollStatus",
                    "type": "INT",
                    "values": {
                        "0": "UNASSIGNED",
                        "1": "PARTIALLY_ASSIGNED",
                        "2": "ASSIGNMENT_PROPOSED",
                        "3": "ASSIGNED",
                        "4": "CHALLENGED"
                    }
                },
                "911": {
                    "name": "TotNumReports",
                    "type": "INT"
                },
                "912": {
                    "name": "LastRptRequested",
                    "type": "BOOLEAN"
                },
                "913": {
                    "name": "AgreementDesc",
                    "type": "STRING"
                },
                "914": {
                    "name": "AgreementID",
                    "type": "STRING"
                },
                "915": {
                    "name": "AgreementDate",
                    "type": "LOCALMKTDATE"
                },
                "916": {
                    "name": "StartDate",
                    "type": "LOCALMKTDATE"
                },
                "917": {
                    "name": "EndDate",
                    "type": "LOCALMKTDATE"
                },
                "918": {
                    "name": "AgreementCurrency",
                    "type": "CURRENCY"
                },
                "919": {
                    "name": "DeliveryType",
                    "type": "INT",
                    "values": {
                        "0": "VERSUS_PAYMENT",
                        "1": "FREE",
                        "2": "TRI_PARTY",
                        "3": "HOLD_IN_CUSTODY"
                    }
                },
                "920": {
                    "name": "EndAccruedInterestAmt",
                    "type": "AMT"
                },
                "921": {
                    "name": "StartCash",
                    "type": "AMT"
                },
                "922": {
                    "name": "EndCash",
                    "type": "AMT"
                },
                "923": {
                    "name": "UserRequestID",
                    "type": "STRING"
                },
                "924": {
                    "name": "UserRequestType",
                    "type": "INT",
                    "values": {
                        "1": "LOGONUSER",
                        "2": "LOGOFFUSER",
                        "3": "CHANGEPASSWORDFORUSER",
                        "4": "REQUEST_INDIVIDUAL_USER_STATUS"
                    }
                },
                "925": {
                    "name": "NewPassword",
                    "type": "STRING"
                },
                "926": {
                    "name": "UserStatus",
                    "type": "INT",
                    "values": {
                        "1": "LOGGED_IN",
                        "2": "NOT_LOGGED_IN",
                        "3": "USER_NOT_RECOGNISED",
                        "4": "PASSWORD_INCORRECT",
                        "5": "PASSWORD_CHANGED",
                        "6": "OTHER"
                    }
                },
                "927": {
                    "name": "UserStatusText",
                    "type": "STRING"
                },
                "928": {
                    "name": "StatusValue",
                    "type": "INT",
                    "values": {
                        "1": "CONNECTED",
                        "2": "NOT_CONNECTED_DOWN_EXPECTED_UP",
                        "3": "NOT_CONNECTED_DOWN_EXPECTED_DOWN",
                        "4": "IN_PROCESS"
                    }
                },
                "929": {
                    "name": "StatusText",
                    "type": "STRING"
                },
                "930": {
                    "name": "RefCompID",
                    "type": "STRING"
                },
                "931": {
                    "name": "RefSubID",
                    "type": "STRING"
                },
                "932": {
                    "name": "NetworkResponseID",
                    "type": "STRING"
                },
                "933": {
                    "name": "NetworkRequestID",
                    "type": "STRING"
                },
                "934": {
                    "name": "LastNetworkResponseID",
                    "type": "STRING"
                },
                "935": {
                    "name": "NetworkRequestType",
                    "type": "INT",
                    "values": {
                        "1": "SNAPSHOT",
                        "2": "SUBSCRIBE",
                        "4": "STOP_SUBSCRIBING",
                        "8": "LEVEL_OF_DETAIL"
                    }
                },
                "936": {
                    "name": "NoCompIDs",
                    "type": "NUMINGROUP"
                },
                "937": {
                    "name": "NetworkStatusResponseType",
                    "type": "INT",
                    "values": {
                        "1": "FULL",
                        "2": "INCREMENTAL_UPDATE"
                    }
                },
                "938": {
                    "name": "NoCollInquiryQualifier",
                    "type": "NUMINGROUP"
                },
                "939": {
                    "name": "TrdRptStatus",
                    "type": "INT",
                    "values": {
                        "0": "ACCEPTED",
                        "1": "REJECTED"
                    }
                },
                "940": {
                    "name": "AffirmStatus",
                    "type": "INT",
                    "values": {
                        "1": "RECEIVED",
                        "2": "CONFIRM_REJECTED",
                        "3": "AFFIRMED"
                    }
                },
                "941": {
                    "name": "UnderlyingStrikeCurrency",
                    "type": "CURRENCY"
                },
                "942": {
                    "name": "LegStrikeCurrency",
                    "type": "CURRENCY"
                },
                "943": {
                    "name": "TimeBracket",
                    "type": "STRING"
                },
                "944": {
                    "name": "CollAction",
                    "type": "INT",
                    "values": {
                        "0": "RETAIN",
                        "1": "ADD",
                        "2": "REMOVE"
                    }
                },
                "945": {
                    "name": "CollInquiryStatus",
                    "type": "INT",
                    "values": {
                        "0": "ACCEPTED",
                        "1": "ACCEPTED_WITH_WARNINGS",
                        "2": "COMPLETED",
                        "3": "COMPLETED_WITH_WARNINGS",
                        "4": "REJECTED"
                    }
                },
                "946": {
                    "name": "CollInquiryResult",
                    "type": "INT",
                    "values": {
                        "0": "SUCCESSFUL",
                        "1": "INVALID_OR_UNKNOWN_INSTRUMENT",
                        "2": "INVALID_OR_UNKNOWN_COLLATERAL_TYPE",
                        "3": "INVALID_PARTIES",
                        "4": "INVALID_TRANSPORT_TYPE_REQUESTED",
                        "5": "INVALID_DESTINATION_REQUESTED",
                        "6": "NO_COLLATERAL_FOUND_FOR_THE_TRADE_SPECIFIED",
                        "7": "NO_COLLATERAL_FOUND_FOR_THE_ORDER_SPECIFIED",
                        "8": "COLLATERAL_INQUIRY_TYPE_NOT_SUPPORTED",
                        "9": "UNAUTHORIZED_FOR_COLLATERAL_INQUIRY",
                        "99": "OTHER"
                    }
                },
                "947": {
                    "name": "StrikeCurrency",
                    "type": "CURRENCY"
                },
                "948": {
                    "name": "NoNested3PartyIDs",
                    "type": "NUMINGROUP"
                },
                "949": {
                    "name": "Nested3PartyID",
                    "type": "STRING"
                },
                "950": {
                    "name": "Nested3PartyIDSource",
                    "type": "CHAR"
                },
                "951": {
                    "name": "Nested3PartyRole",
                    "type": "INT"
                },
                "952": {
                    "name": "NoNested3PartySubIDs",
                    "type": "NUMINGROUP"
                },
                "953": {
                    "name": "Nested3PartySubID",
                    "type": "STRING"
                },
                "954": {
                    "name": "Nested3PartySubIDType",
                    "type": "INT"
                },
                "955": {
                    "name": "LegContractSettlMonth",
                    "type": "MONTHYEAR"
                },
                "956": {
                    "name": "LegInterestAccrualDate",
                    "type": "LOCALMKTDATE"
                }
            }
        };
    }
);