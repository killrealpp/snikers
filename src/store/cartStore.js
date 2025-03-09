import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

export const useCartStore = defineStore("cartStore", () => {
    const carts = ref([]);
    const loading = ref(false);
    const page = ref(1);
    const limit = ref(4);
    const searchQuery = ref("");
    const selectedSort = ref("");
    const visible = ref(false)
    const sortOptions = ref([
        { value: "title", name: "По названию" },
        { value: "price", name: "По цене" }
    ]);
    const drawerList = ref([])
    const buyId = ref(0)
    const profileList = ref([])
    const favoriteList = ref([])



    const fetchCarts = async () => {
        loading.value = true;
        try {
            const response = await axios.get("https://f4a2d880020101ce.mokky.dev/cart");
            carts.value = response.data;
            page.value = 1;
        } catch (e) {
            alert(e.message);
        } finally {
            loading.value = false;
        }
    };

    const filteredCarts = computed(() => {
        return carts.value.filter(cart =>
            cart.title.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    });

    const sortedCarts = computed(() => {
        let sortedArray = [...filteredCarts.value];

        if (selectedSort.value) {
            sortedArray.sort((a, b) => {
                if (selectedSort.value === "title") {
                    return a.title.localeCompare(b.title);
                }
                if (selectedSort.value === "price") {
                    return a.price - b.price;
                }
                return 0;
            });
        }

        return sortedArray;
    });

    const paginatedCarts = computed(() => {
        const start = (page.value - 1) * limit.value;
        const end = start + limit.value;
        return sortedCarts.value.slice(start, end);
    });

    const totalPage = computed(() => Math.ceil(sortedCarts.value.length / limit.value));

    const changePage = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPage.value) {
            page.value = pageNumber;
        }
    };


    const showDrawer = ()=>{
        buyId.value = 0
        visible.value = !visible.value
        if(visible.value === true){
            document.body.style.overflow = 'hidden'
        } else{
            document.body.style.overflow = ''
        }
    }

    const addDrawer = (cart)=>{
        const isExists = drawerList.value.some(item => item.id === cart.id)
        if (!isExists){
            drawerList.value.push(cart)
        }
    }

    const removeDrawer = (drawerItemId)=>{
        drawerList.value =  drawerList.value.filter(item => item.id !== drawerItemId)
    }


    const totalSum = computed(()=>{
        return drawerList.value.reduce((sum, item)=> sum + item.price, 0)
    })

    const buyCart = ()=>{
        buyId.value = 1
        profileList.value.push(...drawerList.value)
        drawerList.value = []
    }

    const toggleFavorite  = (cart) => {
        const index = favoriteList.value.findIndex(item => item.id === cart.id);
        if (index === -1) {
            favoriteList.value.push(cart);
        } else {
            favoriteList.value.splice(index, 1)
        }
    };
    

    return {
        carts, fetchCarts, loading, totalPage, changePage, paginatedCarts, page, searchQuery, selectedSort, sortOptions, showDrawer, visible,
        drawerList, addDrawer, removeDrawer, totalSum, buyCart, buyId, profileList, favoriteList, toggleFavorite 
    };
});
