<template>
  <div id="Week3Component2Index">
    <div class="steps">
      <div :class="['step', { 'active': step === 1 }, { 'done': step > 1 }]">
        {{ step > 1 ? 'DONE' : 'Step1' }}
      </div>
      <div :class="['step', { 'active': step === 2 }, { 'done': step > 2 }]">
        {{ step > 2 ? 'DONE' : 'Step2' }}
      </div>
      <div :class="['step', { 'active': step === 3 }, { 'done': step > 3 }]">
        {{ step > 3 ? 'DONE' : 'Step3' }}
      </div>
    </div>
    <div class="content">
      <!-- 1 -->
      <div v-if="step === 1">
        <div class="label">NAME</div>
        <input v-model="name" type="text">
      </div>
      <!-- 2 -->
      <div v-if="step === 2">
        <div class="label">EMAIL</div>
        <input v-model="email" type="email">
      </div>
      <!-- 3 -->
      <div v-if="step === 3">
        <div class="label">PHONE</div>
        <input v-model="phone" type="number">
      </div>
      <!-- done -->
      <div v-if="step === 4">
        <h1>DONE!</h1>
        <h1>NAME: {{ name }}</h1>
        <h1>EMAIL: {{ email }}</h1>
        <h1>PHONE: {{ phone }}</h1>
      </div>
    </div>
    <div v-if="step !== 4" :class="['btn-submit', { 'btn-disabled': !validation }]" @click="goNext">Go Next</div>
  </div>
</template>

<script>
export default {
  name: 'Week3Component2Index',
  data() {
    return {
      step: 1,
      name: '',
      email: '',
      phone: ''
    }
  },
  computed: {
    validation() {
      switch (this.step) {
        case 1:
          return this.name
        case 2:
          return this.email
        case 3:
          return this.phone
      }
    }
  },
  methods: {
    goNext() {
      if (this.step < 4 && this.validation) {
        this.step++
      }
    }
  }
}
</script>

<style lang="scss">
$color-primary: #2c3e50;
$color-second: #cbcbcb;
$color-success: #00cd98;
$color-white: #ffffff;
$baseSize: 10px;

body,
html {
  display: flex;
  justify-content: center;
}
* {
  box-sizing: border-box;
}
#Week3Component2Index {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  max-width: $baseSize * 70;
  color: $color-primary;
  .steps {
    display: flex;
    align-items: center;
    justify-content: center;
    .step:not(:last-child) {
      margin-right: $baseSize * 8;
      &::before {
        position: absolute;
        left: 100%;
        width: $baseSize * 10;
        border: $baseSize * 0.4 solid $color-second;
        content: '';
        transition: 0.3s;
      }
    }
    .step {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      width: $baseSize * 12.5;
      height: $baseSize * 12.5;
      border: $baseSize * 0.8 solid $color-second;
      border-radius: 100%;
      background-color: #fff;
      color: $color-second;
      font-weight: 900;
      font-size: $baseSize * 2.5;
      transition: 0.3s;
      &::after {
        position: absolute;
        width: $baseSize * 9;
        height: $baseSize * 9;
        border: $baseSize * 0.4 solid $color-second;
        border-radius: 100%;
        content: '';
        transition: 0.3s;
      }
      &.active,
      &.active::after,
      &.active::before {
        border-color: $color-primary;
        color: $color-primary;
      }
      &.done,
      &.done::after,
      &.done::before {
        border-color: $color-success;
        color: $color-success;
      }
    }
  }
  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: $baseSize * 5 0 $baseSize * 8 0;
    .label {
      margin-bottom: $baseSize;
      text-align: center;
      font-weight: 600;
      font-size: $baseSize * 2.5;
    }
    input {
      padding: $baseSize $baseSize * 2;
      width: $baseSize * 40;
      outline: none;
      border: $baseSize * 0.3 solid $color-primary;
      border-radius: $baseSize * 1.5;
      font-size: $baseSize * 2;
      transition: 0.3s;
    }
  }
  .btn {
    &-submit {
      padding: $baseSize * 1.5 $baseSize * 7;
      width: $baseSize * 40;
      border-radius: $baseSize * 2;
      background-color: $color-success;
      color: $color-white;
      text-align: center;
      font-weight: 900;
      font-size: $baseSize * 2;
      cursor: pointer;
      transition: 0.3s;

      user-select: none;
      &:hover {
        background-color: lighten($color-success, 2%);
      }
    }
    &-disabled {
      background-color: $color-second;
      cursor: not-allowed;
      &:hover {
        background-color: $color-second;
      }
    }
  }
}
</style>
