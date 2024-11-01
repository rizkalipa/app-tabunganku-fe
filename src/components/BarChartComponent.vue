<template>
    <Pie
        id="transaction-chart"
        :options="chartOptions"
        :data="chartData"
    />
</template>

<script>
import {Pie} from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    name: "BarChartComponent",
    components: {Pie},
    data() {
        return {
            chartData: {
                labels: ['Bills', 'Transportation', 'Food and Drinks', 'Entertaintment'],
                datasets: [
                    {
                        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                        data: [40, 20, 80, 10]
                    }
                ]
            },
            chartOptions: {
                responsive: true
            }
        }
    }
}
</script>

<style scoped>

</style>