<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <v-card class="modal-container" v-click-outside="onClickOutside">

          <div class="modal-header">
            <slot name="header">
              {{ inputModalStore.modalHeaderName }}
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <v-text-field
                  ref="pwd"
                  v-model="pwd"
                  :rules="[() => !!pwd || '비밀번호를 입력해주세요']"
                  label=""
                  placeholder="password"

              ></v-text-field>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <!--              TODO : 비밀번호 확인  결과 부모component로 - 수정/삭제 진행-->
              <v-btn class="primary col-md" @click="onClickConfirm">확인</v-btn>

            </slot>
          </div>

        </v-card>
      </div>

    </div>
  </transition>
</template>

<script>
import vClickOutside from 'v-click-outside'
import {mapState} from "vuex";

export default {
  name: "InputModal",
  data: () => ({
    pwd: '',
  }),

  computed:
      mapState({
        inputModalStore: state => state.inputModalStore
      }),
  methods: {
    onClickConfirm(){
      // TODO : 비밀번호 체크 api 수정/삭제 분기
      // success -> bottomsheet open

      // fail -> toast error

      // this.$emit('close')
    },
    onClickOutside(){
    this.$store.dispatch('inputModalStore/callCloseInputModal')
    }


  },
  directives: {
    clickOutside: vClickOutside.directive
  }
}
</script>

<style scoped>

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: flex;
  vertical-align: center;
  justify-content: center;
}

.modal-container {
  width: 22rem;
  margin: 10em 2em;
  padding: 20px 30px;
  /*background-color: #fff;*/
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  /*font-family: Helvetica, Arial, sans-serif;*/
}

.modal-header h3 {
  margin-top: 0;
  /*color: #42b983;*/
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  display: block;
}
</style>