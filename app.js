new Vue({
  el: '#app',
  data: {
    currencies: {}
  },
  mounted() {
    this.getCurrencies()
  },
  computed: {
    formattedCurrencies() {
      return Object.values(this.currencies)
    }
  },
  methods: {
    getCurrencies() {
      const currencies = localStorage.getItem('currencies')

      if (currencies) {
        this.currencies = JSON.parse(currencies)
        return
      }
      axios.get('https://free.currencyconverterapi.com/api/v6/currencies')
      .then(response => {
        this.currencies = response.data.results
        localStorage.setItem('currencies', JSON.stringify(response.data.results))
      })
    }
  }
})