<template>
    <component v-once
               :is="is"
               v-bind="allProps"
               @emiter="emiter"
    />
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
// eslint-disable-next-line no-undef
const props = defineProps({

    /**
     * This default dir for components
     * @values 'UI'
     * If from = 'UI' path to component '@/components/UI/ComponentName/AppComponentName',
     * If from = '' path to component '@/components/ComponentName/AppComponentName' (default)
     */
    from : {
        type    : String,
        default : '',
    },

    /**
     * This prop is name component
     * WARNING! Name start with App
     * Example: AppButton, AppAccordeonObjects
     */
    component : {
        type     : String,
        required : true,
    },
    allProps : {
        type    : Object,
        default : () => ({}),
    },
});

const is = defineAsyncComponent(() =>
    import(

        /* @vite-ignore */
        '../'
        + (props.from.length ? props.from + '/' : '')
        + props.component.substring(3)
        + '/' + props.component + '.vue'
    ),
);

const emit = defineEmits(['emiter']);
const emiter = (params) => {
    emit(params[0], params[1]);
};

</script>
