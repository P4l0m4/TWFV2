<script setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'

var ROOT_PATH = 'https://echarts.apache.org/examples'

onMounted(() => {
  var chartDom = document.getElementById('main')
  var myChart = echarts.init(chartDom)
  var option
  fetch(ROOT_PATH + '/data/asset/data/life-expectancy-table.json')
    .then(response => response.json())
    .then(_rawData => run(_rawData))
    .catch(error => console.error('Error fetching data:', error))

  function run(_rawData) {
    const countries = ['Finland', 'France', 'Germany', 'Iceland', 'Norway', 'Poland', 'Russia', 'United Kingdom']
    const datasetWithFilters = []
    const seriesList = []
    countries.forEach(country => {
      var datasetId = 'dataset_' + country
      datasetWithFilters.push({
        id: datasetId,
        fromDatasetId: 'dataset_raw',
        transform: {
          type: 'filter',
          config: {
            and: [
              { dimension: 'Year', gte: 1950 },
              { dimension: 'Country', '=': country },
            ],
          },
        },
      })
      seriesList.push({
        type: 'line',
        datasetId: datasetId,
        showSymbol: false,
        name: country,
        endLabel: {
          show: true,
          formatter: function (params) {
            return params.value[3] + ': ' + params.value[0]
          },
        },
        labelLayout: {
          moveOverlap: 'shiftY',
        },
        emphasis: {
          focus: 'series',
        },
        encode: {
          x: 'Year',
          y: 'Income',
          label: ['Country', 'Income'],
          itemName: 'Year',
          tooltip: ['Income'],
        },
      })
    })
    option = {
      animationDuration: 10000,
      dataset: [
        {
          id: 'dataset_raw',
          source: _rawData,
        },
        ...datasetWithFilters,
      ],
      title: {
        text: 'Income of Germany and France since 1950',
      },
      tooltip: {
        order: 'valueDesc',
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        nameLocation: 'middle',
      },
      yAxis: {
        name: 'Income',
      },
      grid: {
        right: 140,
      },
      series: seriesList,
    }
    myChart.setOption(option)
  }

  option && myChart.setOption(option)
})
</script>

<template>
  <div id="main"></div>
</template>
<style scoped lang="scss">
div {
  width: 100%;
  max-width: 600px;
  height: 480px;
}
</style>
