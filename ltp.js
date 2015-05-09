require = function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = "function" == typeof require && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    for (var i = "function" == typeof require && require, o = 0; o < r.length; o++) s(r[o]);
    return s
}({
    1: [function() {
        ! function() {
            var $D = Date,
                $P = $D.prototype,
                p = function(s, l) {
                    return l || (l = 2), ("000" + s).slice(-1 * l)
                },
                validateConfigObject = function(obj) {
                    var prop, testFunc, result = {},
                        self = this;
                    testFunc = function(prop, func, value) {
                        if ("day" === prop) {
                            var month = void 0 !== obj.month ? obj.month : self.getMonth(),
                                year = void 0 !== obj.year ? obj.year : self.getFullYear();
                            return $D[func](value, year, month)
                        }
                        return $D[func](value)
                    };
                    for (prop in obj)
                        if (hasOwnProperty.call(obj, prop)) {
                            var func = "validate" + prop.charAt(0).toUpperCase() + prop.slice(1);
                            $D[func] && null !== obj[prop] && testFunc(prop, func, obj[prop]) && (result[prop] = obj[prop])
                        }
                    return result
                };
            $P.clearTime = function() {
                return this.setHours(0), this.setMinutes(0), this.setSeconds(0), this.setMilliseconds(0), this
            }, $P.setTimeToNow = function() {
                var n = new Date;
                return this.setHours(n.getHours()), this.setMinutes(n.getMinutes()), this.setSeconds(n.getSeconds()), this.setMilliseconds(n.getMilliseconds()), this
            }, $P.clone = function() {
                return new Date(this.getTime())
            }, $P.compareTo = function(date) {
                return Date.compare(this, date)
            }, $P.equals = function(date) {
                return Date.equals(this, void 0 !== date ? date : new Date)
            }, $P.between = function(start, end) {
                return this.getTime() >= start.getTime() && this.getTime() <= end.getTime()
            }, $P.isAfter = function(date) {
                return 1 === this.compareTo(date || new Date)
            }, $P.isBefore = function(date) {
                return -1 === this.compareTo(date || new Date)
            }, $P.isToday = $P.isSameDay = function(date) {
                return this.clone().clearTime().equals((date || new Date).clone().clearTime())
            }, $P.addMilliseconds = function(value) {
                return value ? (this.setTime(this.getTime() + 1 * value), this) : this
            }, $P.addSeconds = function(value) {
                return value ? this.addMilliseconds(1e3 * value) : this
            }, $P.addMinutes = function(value) {
                return value ? this.addMilliseconds(6e4 * value) : this
            }, $P.addHours = function(value) {
                return value ? this.addMilliseconds(36e5 * value) : this
            }, $P.addDays = function(value) {
                return value ? (this.setDate(this.getDate() + 1 * value), this) : this
            }, $P.addWeekdays = function(value) {
                if (!value) return this;
                var day = this.getDay(),
                    weeks = Math.ceil(Math.abs(value) / 7);
                if ((0 === day || 6 === day) && value > 0 && (this.next().monday(), this.addDays(-1), day = this.getDay()), 0 > value) {
                    for (; 0 > value;) this.addDays(-1), day = this.getDay(), 0 !== day && 6 !== day && value++;
                    return this
                }
                return (value > 5 || value >= 6 - day) && (value += 2 * weeks), this.addDays(value)
            }, $P.addWeeks = function(value) {
                return value ? this.addDays(7 * value) : this
            }, $P.addMonths = function(value) {
                if (!value) return this;
                var n = this.getDate();
                return this.setDate(1), this.setMonth(this.getMonth() + 1 * value), this.setDate(Math.min(n, $D.getDaysInMonth(this.getFullYear(), this.getMonth()))), this
            }, $P.addQuarters = function(value) {
                return value ? this.addMonths(3 * value) : this
            }, $P.addYears = function(value) {
                return value ? this.addMonths(12 * value) : this
            }, $P.add = function(config) {
                if ("number" == typeof config) return this._orient = config, this;
                var x = config;
                return x.day && x.day - this.getDate() !== 0 && this.setDate(x.day), x.milliseconds && this.addMilliseconds(x.milliseconds), x.seconds && this.addSeconds(x.seconds), x.minutes && this.addMinutes(x.minutes), x.hours && this.addHours(x.hours), x.weeks && this.addWeeks(x.weeks), x.months && this.addMonths(x.months), x.years && this.addYears(x.years), x.days && this.addDays(x.days), this
            }, $P.getWeek = function(utc) {
                var self, target = new Date(this.valueOf());
                utc ? (target.addMinutes(target.getTimezoneOffset()), self = target.clone()) : self = this;
                var dayNr = (self.getDay() + 6) % 7;
                target.setDate(target.getDate() - dayNr + 3);
                var firstThursday = target.valueOf();
                return target.setMonth(0, 1), 4 !== target.getDay() && target.setMonth(0, 1 + (4 - target.getDay() + 7) % 7), 1 + Math.ceil((firstThursday - target) / 6048e5)
            }, $P.getISOWeek = function() {
                return p(this.getWeek(!0))
            }, $P.setWeek = function(n) {
                return n - this.getWeek() === 0 ? 1 !== this.getDay() ? this.moveToDayOfWeek(1, this.getDay() > 1 ? -1 : 1) : this : this.moveToDayOfWeek(1, this.getDay() > 1 ? -1 : 1).addWeeks(n - this.getWeek())
            }, $P.setQuarter = function(qtr) {
                var month = Math.abs(3 * (qtr - 1) + 1);
                return this.setMonth(month, 1)
            }, $P.getQuarter = function() {
                return Date.getQuarter(this)
            }, $P.getDaysLeftInQuarter = function() {
                return Date.getDaysLeftInQuarter(this)
            }, $P.moveToNthOccurrence = function(dayOfWeek, occurrence) {
                if ("Weekday" === dayOfWeek) {
                    if (occurrence > 0) this.moveToFirstDayOfMonth(), this.is().weekday() && (occurrence -= 1);
                    else {
                        if (!(0 > occurrence)) return this;
                        this.moveToLastDayOfMonth(), this.is().weekday() && (occurrence += 1)
                    }
                    return this.addWeekdays(occurrence)
                }
                var shift = 0;
                if (occurrence > 0) shift = occurrence - 1;
                else if (-1 === occurrence) return this.moveToLastDayOfMonth(), this.getDay() !== dayOfWeek && this.moveToDayOfWeek(dayOfWeek, -1), this;
                return this.moveToFirstDayOfMonth().addDays(-1).moveToDayOfWeek(dayOfWeek, 1).addWeeks(shift)
            };
            var moveToN = function(getFunc, addFunc, nVal) {
                return function(value, orient) {
                    var diff = (value - this[getFunc]() + nVal * (orient || 1)) % nVal;
                    return this[addFunc](0 === diff ? diff += nVal * (orient || 1) : diff)
                }
            };
            $P.moveToDayOfWeek = moveToN("getDay", "addDays", 7), $P.moveToMonth = moveToN("getMonth", "addMonths", 12), $P.getOrdinate = function() {
                var num = this.getDate();
                return ord(num)
            }, $P.getOrdinalNumber = function() {
                return Math.ceil((this.clone().clearTime() - new Date(this.getFullYear(), 0, 1)) / 864e5) + 1
            }, $P.getTimezone = function() {
                return $D.getTimezoneAbbreviation(this.getUTCOffset(), this.isDaylightSavingTime())
            }, $P.setTimezoneOffset = function(offset) {
                var here = this.getTimezoneOffset(),
                    there = -6 * Number(offset) / 10;
                return there || 0 === there ? this.addMinutes(there - here) : this
            }, $P.setTimezone = function(offset) {
                return this.setTimezoneOffset($D.getTimezoneOffset(offset))
            }, $P.hasDaylightSavingTime = function() {
                return Date.today().set({
                    month: 0,
                    day: 1
                }).getTimezoneOffset() !== Date.today().set({
                    month: 6,
                    day: 1
                }).getTimezoneOffset()
            }, $P.isDaylightSavingTime = function() {
                return Date.today().set({
                    month: 0,
                    day: 1
                }).getTimezoneOffset() !== this.getTimezoneOffset()
            }, $P.getUTCOffset = function(offset) {
                var r, n = -10 * (offset || this.getTimezoneOffset()) / 6;
                return 0 > n ? (r = (n - 1e4).toString(), r.charAt(0) + r.substr(2)) : (r = (n + 1e4).toString(), "+" + r.substr(1))
            }, $P.getElapsed = function(date) {
                return (date || new Date) - this
            }, $P.set = function(config) {
                config = validateConfigObject.call(this, config);
                var key;
                for (key in config)
                    if (hasOwnProperty.call(config, key)) {
                        var addFunc, getFunc, name = key.charAt(0).toUpperCase() + key.slice(1);
                        "week" !== key && "month" !== key && "timezone" !== key && "timezoneOffset" !== key && (name += "s"), addFunc = "add" + name, getFunc = "get" + name, "month" === key ? addFunc += "s" : "year" === key && (getFunc = "getFullYear"), "day" !== key && "timezone" !== key && "timezoneOffset" !== key && "week" !== key && "hour" !== key ? this[addFunc](config[key] - this[getFunc]()) : ("timezone" === key || "timezoneOffset" === key || "week" === key || "hour" === key) && this["set" + name](config[key])
                    }
                return config.day && this.addDays(config.day - this.getDate()), this
            }, $P.moveToFirstDayOfMonth = function() {
                return this.set({
                    day: 1
                })
            }, $P.moveToLastDayOfMonth = function() {
                return this.set({
                    day: $D.getDaysInMonth(this.getFullYear(), this.getMonth())
                })
            };
            var ord = function(n) {
                    switch (1 * n) {
                        case 1:
                        case 21:
                        case 31:
                            return "st";
                        case 2:
                        case 22:
                            return "nd";
                        case 3:
                        case 23:
                            return "rd";
                        default:
                            return "th"
                    }
                },
                parseStandardFormats = function(format) {
                    var y, c = Date.CultureInfo.formatPatterns;
                    switch (format) {
                        case "d":
                            return this.toString(c.shortDate);
                        case "D":
                            return this.toString(c.longDate);
                        case "F":
                            return this.toString(c.fullDateTime);
                        case "m":
                            return this.toString(c.monthDay);
                        case "r":
                        case "R":
                            return y = this.clone().addMinutes(this.getTimezoneOffset()), y.toString(c.rfc1123) + " GMT";
                        case "s":
                            return this.toString(c.sortableDateTime);
                        case "t":
                            return this.toString(c.shortTime);
                        case "T":
                            return this.toString(c.longTime);
                        case "u":
                            return y = this.clone().addMinutes(this.getTimezoneOffset()), y.toString(c.universalSortableDateTime);
                        case "y":
                            return this.toString(c.yearMonth);
                        default:
                            return !1
                    }
                },
                parseFormatStringsClosure = function(context) {
                    return function(m) {
                        if ("\\" === m.charAt(0)) return m.replace("\\", "");
                        switch (m) {
                            case "hh":
                                return p(context.getHours() < 13 ? 0 === context.getHours() ? 12 : context.getHours() : context.getHours() - 12);
                            case "h":
                                return context.getHours() < 13 ? 0 === context.getHours() ? 12 : context.getHours() : context.getHours() - 12;
                            case "HH":
                                return p(context.getHours());
                            case "H":
                                return context.getHours();
                            case "mm":
                                return p(context.getMinutes());
                            case "m":
                                return context.getMinutes();
                            case "ss":
                                return p(context.getSeconds());
                            case "s":
                                return context.getSeconds();
                            case "yyyy":
                                return p(context.getFullYear(), 4);
                            case "yy":
                                return p(context.getFullYear());
                            case "y":
                                return context.getFullYear();
                            case "E":
                            case "dddd":
                                return Date.CultureInfo.dayNames[context.getDay()];
                            case "ddd":
                                return Date.CultureInfo.abbreviatedDayNames[context.getDay()];
                            case "dd":
                                return p(context.getDate());
                            case "d":
                                return context.getDate();
                            case "MMMM":
                                return Date.CultureInfo.monthNames[context.getMonth()];
                            case "MMM":
                                return Date.CultureInfo.abbreviatedMonthNames[context.getMonth()];
                            case "MM":
                                return p(context.getMonth() + 1);
                            case "M":
                                return context.getMonth() + 1;
                            case "t":
                                return context.getHours() < 12 ? Date.CultureInfo.amDesignator.substring(0, 1) : Date.CultureInfo.pmDesignator.substring(0, 1);
                            case "tt":
                                return context.getHours() < 12 ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator;
                            case "S":
                                return ord(context.getDate());
                            case "W":
                                return context.getWeek();
                            case "WW":
                                return context.getISOWeek();
                            case "Q":
                                return "Q" + context.getQuarter();
                            case "q":
                                return String(context.getQuarter());
                            case "z":
                                return context.getTimezone();
                            case "Z":
                            case "X":
                                return Date.getTimezoneOffset(context.getTimezone());
                            case "ZZ":
                                return -60 * context.getTimezoneOffset();
                            case "u":
                                return context.getDay();
                            case "L":
                                return $D.isLeapYear(context.getFullYear()) ? 1 : 0;
                            case "B":
                                return "@" + (context.getUTCSeconds() + 60 * context.getUTCMinutes() + 3600 * (context.getUTCHours() + 1)) / 86.4;
                            default:
                                return m
                        }
                    }
                };
            $P.toString = function(format, ignoreStandards) {
                if (!ignoreStandards && format && 1 === format.length && (output = parseStandardFormats.call(this, format))) return output;
                var parseFormatStrings = parseFormatStringsClosure(this);
                return format ? format.replace(/((\\)?(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|S|q|Q|WW?W?W?)(?![^\[]*\]))/g, parseFormatStrings).replace(/\[|\]/g, "") : this._toString()
            }
        }()
    }, {}],
    2: [function() {
        ! function() {
            var $D = Date,
                $P = $D.prototype,
                p = function(s, l) {
                    return l || (l = 2), ("000" + s).slice(-1 * l)
                };
            $D.console = "undefined" != typeof window && "undefined" != typeof window.console && "undefined" != typeof window.console.log ? console : {
                log: function() {},
                error: function() {}
            }, $D.Config = $D.Config || {}, $D.initOverloads = function() {
                $D.now ? $D._now || ($D._now = $D.now) : $D._now = function() {
                    return (new Date).getTime()
                }, $D.now = function(returnObj) {
                    return returnObj ? $D.present() : $D._now()
                }, $P.toISOString || ($P.toISOString = function() {
                    return this.getUTCFullYear() + "-" + p(this.getUTCMonth() + 1) + "-" + p(this.getUTCDate()) + "T" + p(this.getUTCHours()) + ":" + p(this.getUTCMinutes()) + ":" + p(this.getUTCSeconds()) + "." + String((this.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z"
                }), void 0 === $P._toString && ($P._toString = $P.toString)
            }, $D.initOverloads(), $D.today = function() {
                return (new Date).clearTime()
            }, $D.present = function() {
                return new Date
            }, $D.compare = function(date1, date2) {
                if (isNaN(date1) || isNaN(date2)) throw new Error(date1 + " - " + date2);
                if (date1 instanceof Date && date2 instanceof Date) return date2 > date1 ? -1 : date1 > date2 ? 1 : 0;
                throw new TypeError(date1 + " - " + date2)
            }, $D.equals = function(date1, date2) {
                return 0 === date1.compareTo(date2)
            }, $D.getDayName = function(n) {
                return Date.CultureInfo.dayNames[n]
            }, $D.getDayNumberFromName = function(name) {
                for (var n = Date.CultureInfo.dayNames, m = Date.CultureInfo.abbreviatedDayNames, o = Date.CultureInfo.shortestDayNames, s = name.toLowerCase(), i = 0; i < n.length; i++)
                    if (n[i].toLowerCase() === s || m[i].toLowerCase() === s || o[i].toLowerCase() === s) return i;
                return -1
            }, $D.getMonthNumberFromName = function(name) {
                for (var n = Date.CultureInfo.monthNames, m = Date.CultureInfo.abbreviatedMonthNames, s = name.toLowerCase(), i = 0; i < n.length; i++)
                    if (n[i].toLowerCase() === s || m[i].toLowerCase() === s) return i;
                return -1
            }, $D.getMonthName = function(n) {
                return Date.CultureInfo.monthNames[n]
            }, $D.isLeapYear = function(year) {
                return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
            }, $D.getDaysInMonth = function(year, month) {
                return !month && $D.validateMonth(year) && (month = year, year = Date.today().getFullYear()), [31, $D.isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
            }, $P.getDaysInMonth = function() {
                return $D.getDaysInMonth(this.getFullYear(), this.getMonth())
            }, $D.getTimezoneAbbreviation = function(offset, dst) {
                var p, n = dst ? Date.CultureInfo.abbreviatedTimeZoneDST : Date.CultureInfo.abbreviatedTimeZoneStandard;
                for (p in n)
                    if (n.hasOwnProperty(p) && n[p] === offset) return p;
                return null
            }, $D.getTimezoneOffset = function(name, dst) {
                var i, a = [],
                    z = Date.CultureInfo.timezones;
                for (name || (name = (new Date).getTimezone()), i = 0; i < z.length; i++) z[i].name === name.toUpperCase() && a.push(i);
                if (!z[a[0]]) return null;
                if (1 === a.length || !dst) return z[a[0]].offset;
                for (i = 0; i < a.length; i++)
                    if (z[a[i]].dst) return z[a[i]].offset
            }, $D.getQuarter = function(d) {
                d = d || new Date;
                var q = [1, 2, 3, 4];
                return q[Math.floor(d.getMonth() / 3)]
            }, $D.getDaysLeftInQuarter = function(d) {
                d = d || new Date;
                var qEnd = new Date(d);
                return qEnd.setMonth(qEnd.getMonth() + 3 - qEnd.getMonth() % 3, 0), Math.floor((qEnd - d) / 864e5)
            };
            var validate = function(n, min, max, name) {
                if (name = name ? name : "Object", "undefined" == typeof n) return !1;
                if ("number" != typeof n) throw new TypeError(n + " is not a Number.");
                return min > n || n > max ? !1 : !0
            };
            $D.validateMillisecond = function(value) {
                return validate(value, 0, 999, "millisecond")
            }, $D.validateSecond = function(value) {
                return validate(value, 0, 59, "second")
            }, $D.validateMinute = function(value) {
                return validate(value, 0, 59, "minute")
            }, $D.validateHour = function(value) {
                return validate(value, 0, 23, "hour")
            }, $D.validateDay = function(value, year, month) {
                return void 0 === year || null === year || void 0 === month || null === month ? !1 : validate(value, 1, $D.getDaysInMonth(year, month), "day")
            }, $D.validateWeek = function(value) {
                return validate(value, 0, 53, "week")
            }, $D.validateMonth = function(value) {
                return validate(value, 0, 11, "month")
            }, $D.validateYear = function(value) {
                return validate(value, -271822, 275760, "year")
            }, $D.validateTimezone = function(value) {
                var timezones = {
                    ACDT: 1,
                    ACST: 1,
                    ACT: 1,
                    ADT: 1,
                    AEDT: 1,
                    AEST: 1,
                    AFT: 1,
                    AKDT: 1,
                    AKST: 1,
                    AMST: 1,
                    AMT: 1,
                    ART: 1,
                    AST: 1,
                    AWDT: 1,
                    AWST: 1,
                    AZOST: 1,
                    AZT: 1,
                    BDT: 1,
                    BIOT: 1,
                    BIT: 1,
                    BOT: 1,
                    BRT: 1,
                    BST: 1,
                    BTT: 1,
                    CAT: 1,
                    CCT: 1,
                    CDT: 1,
                    CEDT: 1,
                    CEST: 1,
                    CET: 1,
                    CHADT: 1,
                    CHAST: 1,
                    CHOT: 1,
                    ChST: 1,
                    CHUT: 1,
                    CIST: 1,
                    CIT: 1,
                    CKT: 1,
                    CLST: 1,
                    CLT: 1,
                    COST: 1,
                    COT: 1,
                    CST: 1,
                    CT: 1,
                    CVT: 1,
                    CWST: 1,
                    CXT: 1,
                    DAVT: 1,
                    DDUT: 1,
                    DFT: 1,
                    EASST: 1,
                    EAST: 1,
                    EAT: 1,
                    ECT: 1,
                    EDT: 1,
                    EEDT: 1,
                    EEST: 1,
                    EET: 1,
                    EGST: 1,
                    EGT: 1,
                    EIT: 1,
                    EST: 1,
                    FET: 1,
                    FJT: 1,
                    FKST: 1,
                    FKT: 1,
                    FNT: 1,
                    GALT: 1,
                    GAMT: 1,
                    GET: 1,
                    GFT: 1,
                    GILT: 1,
                    GIT: 1,
                    GMT: 1,
                    GST: 1,
                    GYT: 1,
                    HADT: 1,
                    HAEC: 1,
                    HAST: 1,
                    HKT: 1,
                    HMT: 1,
                    HOVT: 1,
                    HST: 1,
                    ICT: 1,
                    IDT: 1,
                    IOT: 1,
                    IRDT: 1,
                    IRKT: 1,
                    IRST: 1,
                    IST: 1,
                    JST: 1,
                    KGT: 1,
                    KOST: 1,
                    KRAT: 1,
                    KST: 1,
                    LHST: 1,
                    LINT: 1,
                    MAGT: 1,
                    MART: 1,
                    MAWT: 1,
                    MDT: 1,
                    MET: 1,
                    MEST: 1,
                    MHT: 1,
                    MIST: 1,
                    MIT: 1,
                    MMT: 1,
                    MSK: 1,
                    MST: 1,
                    MUT: 1,
                    MVT: 1,
                    MYT: 1,
                    NCT: 1,
                    NDT: 1,
                    NFT: 1,
                    NPT: 1,
                    NST: 1,
                    NT: 1,
                    NUT: 1,
                    NZDT: 1,
                    NZST: 1,
                    OMST: 1,
                    ORAT: 1,
                    PDT: 1,
                    PET: 1,
                    PETT: 1,
                    PGT: 1,
                    PHOT: 1,
                    PHT: 1,
                    PKT: 1,
                    PMDT: 1,
                    PMST: 1,
                    PONT: 1,
                    PST: 1,
                    PYST: 1,
                    PYT: 1,
                    RET: 1,
                    ROTT: 1,
                    SAKT: 1,
                    SAMT: 1,
                    SAST: 1,
                    SBT: 1,
                    SCT: 1,
                    SGT: 1,
                    SLST: 1,
                    SRT: 1,
                    SST: 1,
                    SYOT: 1,
                    TAHT: 1,
                    THA: 1,
                    TFT: 1,
                    TJT: 1,
                    TKT: 1,
                    TLT: 1,
                    TMT: 1,
                    TOT: 1,
                    TVT: 1,
                    UCT: 1,
                    ULAT: 1,
                    UTC: 1,
                    UYST: 1,
                    UYT: 1,
                    UZT: 1,
                    VET: 1,
                    VLAT: 1,
                    VOLT: 1,
                    VOST: 1,
                    VUT: 1,
                    WAKT: 1,
                    WAST: 1,
                    WAT: 1,
                    WEDT: 1,
                    WEST: 1,
                    WET: 1,
                    WST: 1,
                    YAKT: 1,
                    YEKT: 1,
                    Z: 1
                };
                return 1 === timezones[value]
            }, $D.validateTimezoneOffset = function(value) {
                return value > -841 && 721 > value
            }
        }()
    }, {}],
    3: [function() {
        ! function() {
            var $D = Date,
                $P = $D.prototype,
                p = function(s, l) {
                    return l || (l = 2), ("000" + s).slice(-1 * l)
                },
                normalizerSubstitutions = {
                    d: "dd",
                    "%d": "dd",
                    D: "ddd",
                    "%a": "ddd",
                    j: "dddd",
                    l: "dddd",
                    "%A": "dddd",
                    S: "S",
                    F: "MMMM",
                    "%B": "MMMM",
                    m: "MM",
                    "%m": "MM",
                    M: "MMM",
                    "%b": "MMM",
                    "%h": "MMM",
                    n: "M",
                    Y: "yyyy",
                    "%Y": "yyyy",
                    y: "yy",
                    "%y": "yy",
                    g: "h",
                    "%I": "h",
                    G: "H",
                    h: "hh",
                    H: "HH",
                    "%H": "HH",
                    i: "mm",
                    "%M": "mm",
                    s: "ss",
                    "%S": "ss",
                    "%r": "hh:mm tt",
                    "%R": "H:mm",
                    "%T": "H:mm:ss",
                    "%X": "t",
                    "%x": "d",
                    "%e": "d",
                    "%D": "MM/dd/yy",
                    "%n": "\\n",
                    "%t": "\\t",
                    e: "z",
                    T: "z",
                    "%z": "z",
                    "%Z": "z",
                    Z: "ZZ",
                    N: "u",
                    w: "u",
                    "%w": "u",
                    W: "W",
                    "%V": "W"
                },
                normalizer = {
                    substitutes: function(m) {
                        return normalizerSubstitutions[m]
                    },
                    interpreted: function(m, x) {
                        var y;
                        switch (m) {
                            case "%u":
                                return x.getDay() + 1;
                            case "z":
                                return x.getOrdinalNumber();
                            case "%j":
                                return p(x.getOrdinalNumber(), 3);
                            case "%U":
                                var d1 = x.clone().set({
                                        month: 0,
                                        day: 1
                                    }).addDays(-1).moveToDayOfWeek(0),
                                    d2 = x.clone().addDays(1).moveToDayOfWeek(0, -1);
                                return d1 > d2 ? "00" : p((d2.getOrdinalNumber() - d1.getOrdinalNumber()) / 7 + 1);
                            case "%W":
                                return p(x.getWeek());
                            case "t":
                                return $D.getDaysInMonth(x.getFullYear(), x.getMonth());
                            case "o":
                            case "%G":
                                return x.setWeek(x.getISOWeek()).toString("yyyy");
                            case "%g":
                                return x._format("%G").slice(-2);
                            case "a":
                            case "%p":
                                return t("tt").toLowerCase();
                            case "A":
                                return t("tt").toUpperCase();
                            case "u":
                                return p(x.getMilliseconds(), 3);
                            case "I":
                                return x.isDaylightSavingTime() ? 1 : 0;
                            case "O":
                                return x.getUTCOffset();
                            case "P":
                                return y = x.getUTCOffset(), y.substring(0, y.length - 2) + ":" + y.substring(y.length - 2);
                            case "B":
                                var now = new Date;
                                return Math.floor((3600 * now.getHours() + 60 * now.getMinutes() + now.getSeconds() + 60 * (now.getTimezoneOffset() + 60)) / 86.4);
                            case "c":
                                return x.toISOString().replace(/\"/g, "");
                            case "U":
                                return $D.strtotime("now");
                            case "%c":
                                return t("d") + " " + t("t");
                            case "%C":
                                return Math.floor(x.getFullYear() / 100 + 1)
                        }
                    },
                    shouldOverrideDefaults: function(m) {
                        switch (m) {
                            case "%e":
                                return !0;
                            default:
                                return !1
                        }
                    },
                    parse: function(m, context) {
                        var formatString, c = context || new Date;
                        return (formatString = normalizer.substitutes(m)) ? formatString : (formatString = normalizer.interpreted(m, c), formatString ? formatString : m)
                    }
                };
            $D.normalizeFormat = function(format, context) {
                return format.replace(/(%|\\)?.|%%/g, function(t) {
                    return normalizer.parse(t, context)
                })
            }, $D.strftime = function(format, time) {
                var d = Date.parse(time);
                return d._format(format)
            }, $D.strtotime = function(time) {
                var d = $D.parse(time);
                return Math.round($D.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds()) / 1e3)
            };
            var formatReplace = function(context) {
                return function(m) {
                    var formatString, override = !1;
                    return "\\" === m.charAt(0) || "%%" === m.substring(0, 2) ? m.replace("\\", "").replace("%%", "%") : (override = normalizer.shouldOverrideDefaults(m), formatString = $D.normalizeFormat(m, context), formatString ? context.toString(formatString, override) : void 0)
                }
            };
            $P._format = function(format) {
                var formatter = formatReplace(this);
                return format ? format.replace(/(%|\\)?.|%%/g, formatter) : this._toString()
            }, $P.format || ($P.format = $P._format)
        }()
    }, {}],
    4: [function() {
        ! function() {
            "use strict";
            Date.Parsing = {
                Exception: function(s) {
                    this.message = "Parse error at '" + s.substring(0, 10) + " ...'"
                }
            };
            var $P = Date.Parsing,
                dayOffsets = {
                    standard: [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                    leap: [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335]
                };
            $P.isLeapYear = function(year) {
                return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
            };
            var utils = {
                multiReplace: function(str, hash) {
                    var key;
                    for (key in hash)
                        if (Object.prototype.hasOwnProperty.call(hash, key)) {
                            var regex;
                            "function" == typeof hash[key] || (regex = hash[key] instanceof RegExp ? hash[key] : new RegExp(hash[key], "g")), str = str.replace(regex, key)
                        }
                    return str
                },
                getDayOfYearFromWeek: function(obj) {
                    var d, jan4, offset;
                    return obj.weekDay = obj.weekDay || 0 === obj.weekDay ? obj.weekDay : 1, d = new Date(obj.year, 0, 4), jan4 = 0 === d.getDay() ? 7 : d.getDay(), offset = jan4 + 3, obj.dayOfYear = 7 * obj.week + (0 === obj.weekDay ? 7 : obj.weekDay) - offset, obj
                },
                getDayOfYear: function(obj, dayOffset) {
                    obj.dayOfYear || (obj = utils.getDayOfYearFromWeek(obj));
                    for (var i = 0; i <= dayOffset.length; i++) {
                        if (obj.dayOfYear < dayOffset[i] || i === dayOffset.length) {
                            obj.day = obj.day ? obj.day : obj.dayOfYear - dayOffset[i - 1];
                            break
                        }
                        obj.month = i
                    }
                    return obj
                },
                adjustForTimeZone: function(obj, date) {
                    var offset;
                    return "Z" === obj.zone.toUpperCase() || 0 === obj.zone_hours && 0 === obj.zone_minutes ? offset = -date.getTimezoneOffset() : (offset = 60 * obj.zone_hours + (obj.zone_minutes || 0), "+" === obj.zone_sign && (offset *= -1), offset -= date.getTimezoneOffset()), date.setMinutes(date.getMinutes() + offset), date
                },
                setDefaults: function(obj) {
                    return obj.year = obj.year || Date.today().getFullYear(), obj.hours = obj.hours || 0, obj.minutes = obj.minutes || 0, obj.seconds = obj.seconds || 0, obj.milliseconds = obj.milliseconds || 0, (obj.month || !obj.week && !obj.dayOfYear) && (obj.month = obj.month || 0, obj.day = obj.day || 1), obj
                },
                dataNum: function(data, mod, explict, postProcess) {
                    var dataNum = 1 * data;
                    return mod ? postProcess ? data ? 1 * mod(data) : data : data ? mod(dataNum) : data : explict ? data && "undefined" != typeof data ? dataNum : data : data ? dataNum : data
                },
                timeDataProcess: function(obj) {
                    var timeObj = {};
                    for (var x in obj.data) obj.data.hasOwnProperty(x) && (timeObj[x] = obj.ignore[x] ? obj.data[x] : utils.dataNum(obj.data[x], obj.mods[x], obj.explict[x], obj.postProcess[x]));
                    return obj.data.secmins && (obj.data.secmins = 60 * obj.data.secmins.replace(",", "."), timeObj.minutes ? timeObj.seconds || (timeObj.seconds = obj.data.secmins) : timeObj.minutes = obj.data.secmins, delete obj.secmins), timeObj
                },
                buildTimeObjectFromData: function(data) {
                    var time = utils.timeDataProcess({
                        data: {
                            year: data[1],
                            month: data[5],
                            day: data[7],
                            week: data[8],
                            dayOfYear: data[10],
                            hours: data[15],
                            zone_hours: data[23],
                            zone_minutes: data[24],
                            zone: data[21],
                            zone_sign: data[22],
                            weekDay: data[9],
                            minutes: data[16],
                            seconds: data[19],
                            milliseconds: data[20],
                            secmins: data[18]
                        },
                        mods: {
                            month: function(data) {
                                return data - 1
                            },
                            weekDay: function(data) {
                                return data = Math.abs(data), 7 === data ? 0 : data
                            },
                            minutes: function(data) {
                                return data.replace(":", "")
                            },
                            seconds: function(data) {
                                return Math.floor(1 * data.replace(":", "").replace(",", "."))
                            },
                            milliseconds: function(data) {
                                return 1e3 * data.replace(",", ".")
                            }
                        },
                        postProcess: {
                            minutes: !0,
                            seconds: !0,
                            milliseconds: !0
                        },
                        explict: {
                            zone_hours: !0,
                            zone_minutes: !0
                        },
                        ignore: {
                            zone: !0,
                            zone_sign: !0,
                            secmins: !0
                        }
                    });
                    return time
                },
                addToHash: function(hash, keys, data) {
                    keys = keys, data = data;
                    for (var len = keys.length, i = 0; len > i; i++) hash[keys[i]] = data[i];
                    return hash
                },
                combineRegex: function(r1, r2) {
                    return new RegExp("((" + r1.source + ")\\s(" + r2.source + "))")
                },
                getDateNthString: function(add, last, inc) {
                    return add ? Date.today().addDays(inc).toString("d") : last ? Date.today().last()[inc]().toString("d") : void 0
                },
                buildRegexData: function(array) {
                    for (var arr = [], len = array.length, i = 0; len > i; i++) arr.push("[object Array]" === Object.prototype.toString.call(array[i]) ? this.combineRegex(array[i][0], array[i][1]) : array[i]);
                    return arr
                }
            };
            $P.processTimeObject = function(obj) {
                var date, dayOffset;
                return utils.setDefaults(obj), dayOffset = $P.isLeapYear(obj.year) ? dayOffsets.leap : dayOffsets.standard, obj.month || !obj.week && !obj.dayOfYear ? obj.dayOfYear = dayOffset[obj.month] + obj.day : utils.getDayOfYear(obj, dayOffset), date = new Date(obj.year, obj.month, obj.day, obj.hours, obj.minutes, obj.seconds, obj.milliseconds), obj.zone && utils.adjustForTimeZone(obj, date), date
            }, $P.ISO = {
                regex: /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-4])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?\s?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,
                parse: function(s) {
                    var time, data = s.match(this.regex);
                    return data && data.length ? (time = utils.buildTimeObjectFromData(data), time.year && (time.year || time.month || time.day || time.week || time.dayOfYear) ? $P.processTimeObject(time) : null) : null
                }
            }, $P.Numeric = {
                isNumeric: function(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                regex: /\b([0-1]?[0-9])([0-3]?[0-9])([0-2]?[0-9]?[0-9][0-9])\b/i,
                parse: function(s) {
                    var data, i, time = {},
                        order = Date.CultureInfo.dateElementOrder.split("");
                    if (!this.isNumeric(s) || "+" === s[0] && "-" === s[0]) return null;
                    if (s.length < 5 && s.indexOf(".") < 0 && s.indexOf("/") < 0) return time.year = s, $P.processTimeObject(time);
                    if (data = s.match(this.regex), !data || !data.length) return null;
                    for (i = 0; i < order.length; i++) switch (order[i]) {
                        case "d":
                            time.day = data[i + 1];
                            break;
                        case "m":
                            time.month = data[i + 1] - 1;
                            break;
                        case "y":
                            time.year = data[i + 1]
                    }
                    return $P.processTimeObject(time)
                }
            }, $P.Normalizer = {
                regexData: function() {
                    var $R = Date.CultureInfo.regexPatterns;
                    return utils.buildRegexData([$R.tomorrow, $R.yesterday, [$R.past, $R.mon],
                        [$R.past, $R.tue],
                        [$R.past, $R.wed],
                        [$R.past, $R.thu],
                        [$R.past, $R.fri],
                        [$R.past, $R.sat],
                        [$R.past, $R.sun]
                    ])
                },
                basicReplaceHash: function() {
                    var $R = Date.CultureInfo.regexPatterns;
                    return {
                        January: $R.jan.source,
                        February: $R.feb,
                        March: $R.mar,
                        April: $R.apr,
                        May: $R.may,
                        June: $R.jun,
                        July: $R.jul,
                        August: $R.aug,
                        September: $R.sep,
                        October: $R.oct,
                        November: $R.nov,
                        December: $R.dec,
                        "": /\bat\b/gi,
                        " ": /\s{2,}/,
                        am: $R.inTheMorning,
                        "9am": $R.thisMorning,
                        pm: $R.inTheEvening,
                        "7pm": $R.thisEvening
                    }
                },
                keys: function() {
                    return [utils.getDateNthString(!0, !1, 1), utils.getDateNthString(!0, !1, -1), utils.getDateNthString(!1, !0, "monday"), utils.getDateNthString(!1, !0, "tuesday"), utils.getDateNthString(!1, !0, "wednesday"), utils.getDateNthString(!1, !0, "thursday"), utils.getDateNthString(!1, !0, "friday"), utils.getDateNthString(!1, !0, "saturday"), utils.getDateNthString(!1, !0, "sunday")]
                },
                buildRegexFunctions: function() {
                    var $R = Date.CultureInfo.regexPatterns,
                        __ = Date.i18n.__,
                        tomorrowRE = new RegExp("(\\b\\d\\d?(" + __("AM") + "|" + __("PM") + ")? )(" + $R.tomorrow.source.slice(1) + ")", "i"),
                        todayRE = new RegExp($R.today.source + "(?!\\s*([+-]))\\b");
                    this.replaceFuncs = [
                        [todayRE, function(full) {
                            return full.length > 1 ? Date.today().toString("d") : full
                        }],
                        [tomorrowRE, function(full, m1) {
                            var t = Date.today().addDays(1).toString("d");
                            return t + " " + m1
                        }],
                        [$R.amThisMorning, function(str, am) {
                            return am
                        }],
                        [$R.pmThisEvening, function(str, pm) {
                            return pm
                        }]
                    ]
                },
                buildReplaceData: function() {
                    this.buildRegexFunctions(), this.replaceHash = utils.addToHash(this.basicReplaceHash(), this.keys(), this.regexData())
                },
                stringReplaceFuncs: function(s) {
                    for (var i = 0; i < this.replaceFuncs.length; i++) s = s.replace(this.replaceFuncs[i][0], this.replaceFuncs[i][1]);
                    return s
                },
                parse: function(s) {
                    s = this.stringReplaceFuncs(s), s = utils.multiReplace(s, this.replaceHash);
                    try {
                        var n = s.split(/([\s\-\.\,\/\x27]+)/);
                        3 === n.length && $P.Numeric.isNumeric(n[0]) && $P.Numeric.isNumeric(n[2]) && n[2].length >= 4 && "d" === Date.CultureInfo.dateElementOrder[0] && (s = "1/" + n[0] + "/" + n[2])
                    } catch (e) {}
                    return s
                }
            }, $P.Normalizer.buildReplaceData()
        }()
    }, {}],
    5: [function(require, module, exports) {
        ! function() {
            var $D = Date,
                lang = Date.CultureStrings ? Date.CultureStrings.lang : null,
                loggedKeys = {},
                getText = {
                    getFromKey: function(key, countryCode) {
                        var output;
                        return output = Date.CultureStrings && Date.CultureStrings[countryCode] && Date.CultureStrings[countryCode][key] ? Date.CultureStrings[countryCode][key] : getText.buildFromDefault(key), "/" === key.charAt(0) && (output = getText.buildFromRegex(key, countryCode)), output
                    },
                    getFromObjectValues: function(obj, countryCode) {
                        var key, output = {};
                        for (key in obj) obj.hasOwnProperty(key) && (output[key] = getText.getFromKey(obj[key], countryCode));
                        return output
                    },
                    getFromObjectKeys: function(obj, countryCode) {
                        var key, output = {};
                        for (key in obj) obj.hasOwnProperty(key) && (output[getText.getFromKey(key, countryCode)] = obj[key]);
                        return output
                    },
                    getFromArray: function(arr, countryCode) {
                        for (var output = [], i = 0; i < arr.length; i++) i in arr && (output[i] = getText.getFromKey(arr[i], countryCode));
                        return output
                    },
                    buildFromDefault: function(key) {
                        var output, length, split, last;
                        switch (key) {
                            case "name":
                                output = "en-US";
                                break;
                            case "englishName":
                                output = "English (United States)";
                                break;
                            case "nativeName":
                                output = "English (United States)";
                                break;
                            case "twoDigitYearMax":
                                output = 2049;
                                break;
                            case "firstDayOfWeek":
                                output = 0;
                                break;
                            default:
                                output = key, split = key.split("_"), length = split.length, length > 1 && "/" !== key.charAt(0) && (last = split[length - 1].toLowerCase(), ("initial" === last || "abbr" === last) && (output = split[0]))
                        }
                        return output
                    },
                    buildFromRegex: function(key, countryCode) {
                        var output;
                        return output = Date.CultureStrings && Date.CultureStrings[countryCode] && Date.CultureStrings[countryCode][key] ? new RegExp(Date.CultureStrings[countryCode][key], "i") : new RegExp(key.replace(new RegExp("/", "g"), ""), "i")
                    }
                },
                shallowMerge = function(obj1, obj2) {
                    for (var attrname in obj2) obj2.hasOwnProperty(attrname) && (obj1[attrname] = obj2[attrname])
                },
                __ = function(key, language) {
                    var countryCode = language ? language : lang;
                    return loggedKeys[key] = key, "object" == typeof key ? key instanceof Array ? getText.getFromArray(key, countryCode) : getText.getFromObjectKeys(key, countryCode) : getText.getFromKey(key, countryCode)
                },
                loadI18nScript = function(code) {
                    var url = Date.Config.i18n + code + ".js",
                        head = document.getElementsByTagName("head")[0] || document.documentElement,
                        script = document.createElement("script");
                    script.src = url;
                    var completed = !1,
                        events = {
                            done: function() {}
                        };
                    return script.onload = script.onreadystatechange = function() {
                        completed || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (events.done(), head.removeChild(script))
                    }, setTimeout(function() {
                        head.insertBefore(script, head.firstChild)
                    }, 0), {
                        done: function(cb) {
                            events.done = function() {
                                cb && setTimeout(cb, 0)
                            }
                        }
                    }
                },
                buildInfo = {
                    buildFromMethodHash: function(obj) {
                        var key;
                        for (key in obj) obj.hasOwnProperty(key) && (obj[key] = buildInfo[obj[key]]());
                        return obj
                    },
                    timeZoneDST: function() {
                        var DST = {
                            CHADT: "+1345",
                            NZDT: "+1300",
                            AEDT: "+1100",
                            ACDT: "+1030",
                            AZST: "+0500",
                            IRDT: "+0430",
                            EEST: "+0300",
                            CEST: "+0200",
                            BST: "+0100",
                            PMDT: "-0200",
                            ADT: "-0300",
                            NDT: "-0230",
                            EDT: "-0400",
                            CDT: "-0500",
                            MDT: "-0600",
                            PDT: "-0700",
                            AKDT: "-0800",
                            HADT: "-0900"
                        };
                        return __(DST)
                    },
                    timeZoneStandard: function() {
                        var standard = {
                            LINT: "+1400",
                            TOT: "+1300",
                            CHAST: "+1245",
                            NZST: "+1200",
                            NFT: "+1130",
                            SBT: "+1100",
                            AEST: "+1000",
                            ACST: "+0930",
                            JST: "+0900",
                            CWST: "+0845",
                            CT: "+0800",
                            ICT: "+0700",
                            MMT: "+0630",
                            BST: "+0600",
                            NPT: "+0545",
                            IST: "+0530",
                            PKT: "+0500",
                            AFT: "+0430",
                            MSK: "+0400",
                            IRST: "+0330",
                            FET: "+0300",
                            EET: "+0200",
                            CET: "+0100",
                            GMT: "+0000",
                            UTC: "+0000",
                            CVT: "-0100",
                            GST: "-0200",
                            BRT: "-0300",
                            NST: "-0330",
                            AST: "-0400",
                            EST: "-0500",
                            CST: "-0600",
                            MST: "-0700",
                            PST: "-0800",
                            AKST: "-0900",
                            MIT: "-0930",
                            HST: "-1000",
                            SST: "-1100",
                            BIT: "-1200"
                        };
                        return __(standard)
                    },
                    timeZones: function(data) {
                        var zone;
                        data.timezones = [];
                        for (zone in data.abbreviatedTimeZoneStandard) data.abbreviatedTimeZoneStandard.hasOwnProperty(zone) && data.timezones.push({
                            name: zone,
                            offset: data.abbreviatedTimeZoneStandard[zone]
                        });
                        for (zone in data.abbreviatedTimeZoneDST) data.abbreviatedTimeZoneDST.hasOwnProperty(zone) && data.timezones.push({
                            name: zone,
                            offset: data.abbreviatedTimeZoneDST[zone],
                            dst: !0
                        });
                        return data.timezones
                    },
                    days: function() {
                        return __(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"])
                    },
                    dayAbbr: function() {
                        return __(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"])
                    },
                    dayShortNames: function() {
                        return __(["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"])
                    },
                    dayFirstLetters: function() {
                        return __(["S_Sun_Initial", "M_Mon_Initial", "T_Tues_Initial", "W_Wed_Initial", "T_Thu_Initial", "F_Fri_Initial", "S_Sat_Initial"])
                    },
                    months: function() {
                        return __(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])
                    },
                    monthAbbr: function() {
                        return __(["Jan_Abbr", "Feb_Abbr", "Mar_Abbr", "Apr_Abbr", "May_Abbr", "Jun_Abbr", "Jul_Abbr", "Aug_Abbr", "Sep_Abbr", "Oct_Abbr", "Nov_Abbr", "Dec_Abbr"])
                    },
                    formatPatterns: function() {
                        return getText.getFromObjectValues({
                            shortDate: "M/d/yyyy",
                            longDate: "dddd, MMMM dd, yyyy",
                            shortTime: "h:mm tt",
                            longTime: "h:mm:ss tt",
                            fullDateTime: "dddd, MMMM dd, yyyy h:mm:ss tt",
                            sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
                            universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
                            rfc1123: "ddd, dd MMM yyyy HH:mm:ss",
                            monthDay: "MMMM dd",
                            yearMonth: "MMMM, yyyy"
                        }, Date.i18n.currentLanguage())
                    },
                    regex: function() {
                        return getText.getFromObjectValues({
                            inTheMorning: "/( in the )(morn(ing)?)\\b/",
                            thisMorning: "/(this )(morn(ing)?)\\b/",
                            amThisMorning: "/(\b\\d(am)? )(this )(morn(ing)?)/",
                            inTheEvening: "/( in the )(even(ing)?)\\b/",
                            thisEvening: "/(this )(even(ing)?)\\b/",
                            pmThisEvening: "/(\b\\d(pm)? )(this )(even(ing)?)/",
                            jan: "/jan(uary)?/",
                            feb: "/feb(ruary)?/",
                            mar: "/mar(ch)?/",
                            apr: "/apr(il)?/",
                            may: "/may/",
                            jun: "/jun(e)?/",
                            jul: "/jul(y)?/",
                            aug: "/aug(ust)?/",
                            sep: "/sep(t(ember)?)?/",
                            oct: "/oct(ober)?/",
                            nov: "/nov(ember)?/",
                            dec: "/dec(ember)?/",
                            sun: "/^su(n(day)?)?/",
                            mon: "/^mo(n(day)?)?/",
                            tue: "/^tu(e(s(day)?)?)?/",
                            wed: "/^we(d(nesday)?)?/",
                            thu: "/^th(u(r(s(day)?)?)?)?/",
                            fri: "/fr(i(day)?)?/",
                            sat: "/^sa(t(urday)?)?/",
                            future: "/^next/",
                            past: "/^last|past|prev(ious)?/",
                            add: "/^(\\+|aft(er)?|from|hence)/",
                            subtract: "/^(\\-|bef(ore)?|ago)/",
                            yesterday: "/^yes(terday)?/",
                            today: "/^t(od(ay)?)?/",
                            tomorrow: "/^tom(orrow)?/",
                            now: "/^n(ow)?/",
                            millisecond: "/^ms|milli(second)?s?/",
                            second: "/^sec(ond)?s?/",
                            minute: "/^mn|min(ute)?s?/",
                            hour: "/^h(our)?s?/",
                            week: "/^w(eek)?s?/",
                            month: "/^m(onth)?s?/",
                            day: "/^d(ay)?s?/",
                            year: "/^y(ear)?s?/",
                            shortMeridian: "/^(a|p)/",
                            longMeridian: "/^(a\\.?m?\\.?|p\\.?m?\\.?)/",
                            timezone: "/^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\\s*(\\+|\\-)\\s*\\d\\d\\d\\d?)|gmt|utc)/",
                            ordinalSuffix: "/^\\s*(st|nd|rd|th)/",
                            timeContext: "/^\\s*(\\:|a(?!u|p)|p)/"
                        }, Date.i18n.currentLanguage())