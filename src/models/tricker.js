function Tricker(bid,
    bidSize,
    ask,
    askSize,
    dailyChange,
    dailyChangeRealtive,
    lastPrice,
    volume,
    high,
    low) {

    this.bid = bid
    this.bidSize = bidSize
    this.ask = ask
    this.askSize = askSize
    this.dailyChange = dailyChange
    this.dailyChangeRealtive = dailyChangeRealtive
    this.lastPrice = lastPrice
    this.volume = volume
    this.high = high
    this.low = low
}

module.exports = {
    Tricker
}
