<template>
    <div>
        <div class="som-notice-bar" v-if="show && type !== 'alarm'">
            <div>
                <template v-if="type === 'button' && !!buttonText">
                    <div class="som-notice-bar__button" @click="buttonClick">{{buttonText}}</div>
                    <div class="som-notice-bar__button-lucency">{{buttonText}}</div>
                </template>
                <div class="som-notice-bar__text" :class="{'som-notice-bar__mr32' : !!type && type !== 'button'}">
                    <slot></slot>
                    <div class="som-notice-bar__close" v-if="type === 'close'" @click="hide"></div>
                    <div class="som-notice-bar__right-arrow" v-if="type === 'arrow'"></div>
                </div>
            </div>
        </div>
        <div class="som-notice-bar-alarm" v-if="show && type === 'alarm'">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import 'styles/notice-bar.css'

    export default {
        name: 'SomNoticeBar',
        props: {
            'show': {
                type: Boolean,
                default: true
            },
            'type': {
                type: String,
                default: ''
            },
            'buttonText': {
                type: String,
                default: ''
            }
        },
        methods: {
            hide() {
                this.$emit('update:show', false);
            },
            buttonClick() {
                this.$emit('buttonClick');
            }
        }
    };

</script>
