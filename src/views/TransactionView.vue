<template>
    <div id="transaction-view">
        <section class="mb-16">
            <div class="mb-8">
                <div class="flex justify-between items-center">
                    <h1 class="text-xl font-semibold">Expenses</h1>

                    <button class="flex items-center gap-2 px-4 py-1 rounded-full border border-gray-900">
                        <span class="text-sm">Today</span>
                        <span class="text-sm"><i class="fas fa-caret-down"></i></span>
                    </button>
                </div>
            </div>

            <div class="mb-8">
                <BarChartComponent />
            </div>

            <ListExpensesComponent />
        </section>
    </div>
</template>

<script>
import BarChartComponent from "@/components/BarChartComponent.vue";
import ListExpensesComponent from "@/components/expenses/ListExpensesComponent.vue";

export default {
    name: "TransactionView",
    components: {ListExpensesComponent, BarChartComponent}
}
</script>

<style scoped>
    #transaction-view {
        --animate-duration: 0.2s;
    }
</style>