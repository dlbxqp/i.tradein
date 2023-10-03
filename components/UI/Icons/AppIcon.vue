<template>
    <svg :class="classNames"
         :viewBox="`0 0 ${width} ${height}`"
         :style="`width: ${width}px; height: ${height}px;`"
    >
        <use :xlink:href="`#${icon}`"/>
    </svg>
</template>

<script>
export default {
    name  : 'AppIcon',
    props : {
        icon : {
            type     : String,
            required : true,
        },

        width : {
            type    : Number,
            default : 24,
        },

        height : {
            type    : Number,
            default : 24,
        },
    },

    computed : {
        classNames() {
            return ['icon', `icon_${this.icon}`];
        },
    },
};
</script>

<style lang="scss">
.icon {
    display: block;
}
</style>
