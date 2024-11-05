<template>
    <div id="create-transaction-view">
        <section class="mb-16">
            <div class="mb-16">
                <div class="flex justify-between items-center">
                    <h1 class="text-xl font-semibold">Add</h1>

                    <button @click="$router.go(-1)" class="flex items-center gap-2 px-2 py-1 rounded-full border border-gray-900">
                        <span class="text-sm"><i class="fas fa-xmark"></i></span>
                    </button>
                </div>
            </div>


            <div class="flex bg-gray-50 rounded-full py-2 px-2 mb-8">
                <div class="w-full p-2 rounded-full">
                    <div class="flex items-center gap-4">
                        <div class="w-6 h-6 rounded-2xl bg-emerald-100 flex items-center justify-center">
                            <span class="text-sm text-emerald-600"><i class="fas fa-arrow-down-long"></i></span>
                        </div>
                        <div>
                            <p class="text-gray-600 text-sm">Income</p>
                        </div>
                    </div>
                </div>

                <div class="w-full p-2 rounded-full bg-white shadow-md rounded-2xl">
                    <div class="flex items-center gap-4">
                        <div class="w-6 h-6 rounded-2xl bg-pink-100 flex items-center justify-center">
                            <span class="text-sm text-pink-600"><i class="fas fa-arrow-up-long"></i></span>
                        </div>
                        <div>
                            <p class="text-gray-600 text-sm">Expenses</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-center">
                <div class="mx-auto w-full bg-white">
                    <form>
                        <div class="my-12">
                            <div class="inline-block relative w-full">
                                <input class="w-full text-center rounded-md bg-white py-3 text-5xl font-semibold outline-none focus:border-none" value="0" />

                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center text-gray-700">
                                    <p class="font-semibold text-xl">IDR</p>
                                </div>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
                                    <span class="text-lg text-gray-700"><i class="fas fa-delete-left"></i></span>
                                </div>
                            </div>
                        </div>

                        <div class="mb-5">
                            <p class="text-sm text-gray-300 mb-2">What Expense For ?</p>
                            <div class="inline-block relative w-full">
                                <div class="flex flex-wrap items-center gap-4">
                                    <div class="bg-blue-100 px-4 py-2 rounded-full flex items-center justify-center">
                                        <span class="text-sm mr-2"><i class="fas fa-receipt"></i></span>
                                        <h4 class="font-semibold text-base">Bills</h4>
                                    </div>
                                    <div class="bg-orange-100 px-4 py-2 rounded-full flex items-center justify-center">
                                        <span class="text-sm mr-2"><i class="fas fa-utensils"></i></span>
                                        <h4 class="font-semibold text-base">Foods and Drinks</h4>
                                    </div>
                                    <div class="bg-emerald-100 px-4 py-2 rounded-full flex items-center justify-center">
                                        <span class="text-sm mr-2"><i class="fas fa-bus"></i></span>
                                        <h4 class="font-semibold text-base">Transportation</h4>
                                    </div>
                                    <div class="bg-pink-100 px-4 py-2 rounded-full flex items-center justify-center">
                                        <span class="text-sm mr-2"><i class="fas fa-shirt"></i></span>
                                        <h4 class="font-semibold text-base">Shopping</h4>
                                    </div>
                                    <div class="bg-purple-100 px-4 py-2 rounded-full flex items-center justify-center">
                                        <span class="text-sm mr-2"><i class="fas fa-plane-departure"></i></span>
                                        <h4 class="font-semibold text-base">Vacation</h4>
                                    </div>
                                    <div class="bg-rose-100 px-4 py-2 rounded-full flex items-center justify-center">
                                        <span class="text-sm mr-2"><i class="fas fa-film"></i></span>
                                        <h4 class="font-semibold text-base">Entertainment</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mb-5">
                            <p class="text-sm text-gray-300 mb-2">Alocations</p>
                            <div class="inline-block relative w-full">
                                <select class="text-base block appearance-none w-full bg-white border border-[#e0e0e0] py-3 px-6 rounded-md focus:outline-none">
                                    <option value="1">Saving</option>
                                    <option value="2">Goals</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>

                        <div class="mb-5">
                            <p class="text-sm text-gray-300 mb-2">What Goals ?</p>
                            <div class="inline-block relative w-full mb-2">
                                <div class="flex flex-wrap items-center gap-4">
                                    <div class="bg-emerald-100 px-4 py-2 rounded-full flex items-center justify-center">
                                        <span class="text-sm mr-2"><i class="fas fa-plane"></i></span>
                                        <h4 class="font-semibold text-base">Travel</h4>
                                    </div>
                                    <div class="bg-emerald-100 px-4 py-2 rounded-full flex items-center justify-center">
                                        <span class="text-sm mr-2"><i class="fas fa-laptop"></i></span>
                                        <h4 class="font-semibold text-base">Laptop</h4>
                                    </div>
                                    <div class="bg-emerald-100 px-4 py-2 rounded-full flex items-center justify-center">
                                        <span class="text-sm mr-2"><i class="fas fa-mobile-phone"></i></span>
                                        <h4 class="font-semibold text-base">Gadget</h4>
                                    </div>
                                    <div class="bg-emerald-100 px-4 py-2 rounded-full flex items-center justify-center">
                                        <span class="text-sm mr-2"><i class="fas fa-layer-group"></i></span>
                                        <h4 class="font-semibold text-base">Goods</h4>
                                    </div>

                                    <button class="bg-gray-100 px-4 py-2 rounded-full flex items-center justify-center w-full">
                                        <span class="text-sm mr-2"><i class="fas fa-plus-circle"></i></span>
                                        <h4 class="font-semibold text-base">Add Goals</h4>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="mb-5">
                            <p class="text-sm text-gray-300 mb-2">Notes</p>
                            <input type="text" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-gray-500" />
                        </div>

                        <div class="my-16">
                            <button
                                class="hover:shadow-form w-full rounded-md bg-gray-700 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                Add New
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "CreateTransactionView"
}
</script>

<style scoped>

</style>