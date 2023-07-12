<template>
    <div class="contra-list">
        <AppHuman class="fears__human"
            :image="human.image"
            :title="human.title"
        />

        <ol class="contra-list__list" :class="listClasses">
            <li v-for="(item, index) in list"
                :key="`contra-list_item_${index}`"
                class="contra-list__item"
                v-html="item"
            />
        </ol>
    </div>
</template>

<script>
import AppHuman from '@/components/Human/AppHuman.vue';

export default {
    name: "AppContraList",
    components : {
        AppHuman
    },
    props : {
        human : {
            type     : Array,
            required : true
        },
        list : {
            type     : Array,
            required : true
        },
        isStrike : {

        }
    },

    computed : {
        listClasses(){
            return {'contra-list__list_striked': this.isStrike}
        }
    }
}
</script>

<style lang="scss">

</style>
