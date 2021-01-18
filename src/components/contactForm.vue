<template>
  <form
    name="contact"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="handleSubmit"
  >
    <div class="text-field">
      <input
        id="email__input"
        type="email"
        name="email"
        required="true"
        autocomplete="email"
        v-model="form.email"
      />
      <label class="text-field__label" for="email__input">Email</label>
      <div class="text-field__line"></div>
    </div>
    <div class="text-field">
      <input
        id="subject__input"
        type="text"
        name="subject"
        required="true"
        v-model="form.subject"
      />
      <label class="text-field__label" for="subject__input"
        >Předmět zprávy</label
      >
      <div class="text-field__line"></div>
    </div>
    <div class="text-area">
      <textarea
        name="message"
        id="message__input"
        cols="30"
        rows="10"
        required="true"
        v-model="form.message"
      ></textarea>
      <label class="text-area__label" for="message__input">
        Zpráva
      </label>
      <div class="text-area__line"></div>
    </div>
    <div class="form__terms">
      <span>
        Odesláním souhlasíte se
      </span>
      <button
        class="link"
        type="button"
        aria-label="Otevřít modální dialogové okno s podmínkami"
        @click="openModal"
      >
        zpracováním osobních údajů.
      </button>
    </div>
    <mdn-button type="submit">Odeslat</mdn-button>
    <modal-window
      v-if="formSubmission.modalVisible"
      @closemodal="closeFormFeedback"
    >
      <div class="modal__main">
        <div class="modal__head">
          <svg
            aria-hidden="true"
            focusable="false"
            width="100"
            height="100"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            v-if="formSubmission.success"
          >
            <path
              fill="green"
              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            focusable="false"
            width="100"
            height="100"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512"
            v-else
          >
            <path
              fill="red"
              d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            ></path>
          </svg>
        </div>
        <div class="modal__content">
          <div class="modal__content__success" v-if="formSubmission.success">
            <h2>Odesláno</h2>
            <p>Formulář byl úspěšně odeslán.</p>
          </div>
          <div class="modal__content__error" v-else>
            <h2>Chyba</h2>
            <p>
              Při odeslání formuláře se vyskytla chyba. Prosím napište svůj
              dotaz na adresu
              <a href="mailto:jan@janvitu.dev" class="modal__link"
                >jan@janvitu.dev</a
              >.
            </p>
          </div>
        </div>
      </div>
    </modal-window>
    <modal-window v-if="termsAndConditionsOpenned" @closemodal="closeModal">
      <article>
        <h2>Zásady ochrany osobních údajů</h2>
        <p>
          Provozovatel webu: Jan Vítů
          <br />
          IČO: 09382925<br />Se sídlem Šumavksá 887, Kaplice<br />Kontaktní
          e-mail:
          <a href="mailto:jan@janvitu.dev">jan@janvitu.dev</a>
        </p>
        <h3>Jak data sbíráme?</h3>
        <p>
          Při odeslání formuláře je zpráva s Vaší emailovou adresou zaslána na
          speciálně zřízený email, který spravuje Jan Vítů.
        </p>
        <h3>Jaká data sbíráme a proč?</h3>
        <p>Pro účely komunikace uchováváme následující data:</p>
        <ul>
          <li><strong>Vaše emailová adresa</strong></li>
          <li><strong>Předmět Vaší zprávy</strong></li>
          <li><strong>Obsah elektronické komunikace</strong></li>
        </ul>
        <p>
          Tato data sbíráme, abychom vám mohli odpovědět na dotazy či
          připomínky, které skrze formulář zašlete. Tyto údaje nikde veřejně
          neuvádíme.
        </p>
        <h3>Jak dlouho data uchováváme?</h3>
        <p>
          Data jsou uchovávána po dobu nezbytně nutnou pro odpověď, maximálně
          však 1 rok.
        </p>
        <h3>Kdo osobní údaje zpracovává?</h3>
        <p>Zpracovatelem těchto údajů je:</p>
        <p>
          Jan Vítů (IČO: 09382925, se sídlem Šumavksá 887, Kaplice), který
          provozuje tento web a odpovídá na Vaše dotazy.
        </p>
        <h3>Jaká jsou má práva?</h3>
        <ul>
          <li>
            <strong>Právo na odvolání souhlasu</strong> - Kdykoli můžete odvolat
            dříve udělený souhlas se zpracováním Vašich osobních údajů.
          </li>
          <li>
            <strong>Právo na informace</strong> - Můžete se dotázat, jaké údaje
            zpracováváme, za jakým účelem, v jakém rozsahu, jak dlouho a kdo k
            nim má přístup.
          </li>
          <li>
            <strong>Právo na opravu či výmaz</strong> - Kdykoli můžete požádat o
            opravu či výmaz Vašich osobních údajů.
          </li>
        </ul>
        <p>
          Pro uplatnění kteréhokoliv práva zmíněného výše kontaktujte
          Provozovatele webu, a to e-mailem, popř. písemně.
        </p>
        <p class="center">
          <em
            >Tyto Zásady ochrany osobních údajů jsou platné a účinné od 20. 11.
            2020.</em
          >
        </p>
      </article>
    </modal-window>
  </form>
</template>

<script>
import axios from "axios"
import { encode } from "@/use/useFormValidator.js"

import mdnButton from "@/components/mdn/mdnButton.vue"
import { reactive, ref } from "vue"
import ModalWindow from "./modalWindow.vue"

export default {
  components: {
    mdnButton,
    ModalWindow
  },
  setup() {
    const termsAndConditionsOpenned = ref(false)

    function openModal() {
      termsAndConditionsOpenned.value = true
      document.querySelector("body").classList.add("no-scroll")
    }
    function closeModal() {
      termsAndConditionsOpenned.value = false
      document.querySelector("body").classList.remove("no-scroll")
    }

    const form = reactive({
      email: "",
      subject: "",
      message: ""
    })

    function handleSubmit() {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      }
      axios
        .post(
          "/",
          encode({
            "form-name": "contact",
            email: form.email,
            subject: form.subject,
            message: form.message
          }),
          axiosConfig
        )
        .then(() => {
          form.email = ""
          form.subject = ""
          form.message = ""
          formSubmission.success = true
          formSubmission.modalVisible = true
          document.querySelector("body").classList.add("no-scroll")
          resetForm()
        })
        .catch(() => {
          formSubmission.success = false
          formSubmission.modalVisible = true
          document.querySelector("body").classList.add("no-scroll")
        })
    }
    function resetForm() {
      const validationFields = document.querySelectorAll(
        ".text-field, .text-area"
      )
      validationFields.forEach(field => {
        field.classList.remove("is-visited")
      })
    }

    const formSubmission = reactive({
      modalVisible: false,
      success: false
    })

    function closeFormFeedback() {
      formSubmission.modalVisible = false
      document.querySelector("body").classList.remove("no-scroll")
    }

    return {
      form,
      handleSubmit,
      termsAndConditionsOpenned,
      openModal,
      closeModal,
      formSubmission,
      closeFormFeedback
    }
  }
}
</script>

<style lang="scss">
.text-field {
  position: relative;
  text-align: left;
  min-width: 280px;
  min-height: 48px;
  height: 2.35rem;
  background: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-bottom: 26px;
  input {
    position: absolute;
    color: #fff;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    padding: 20px 12px 7px 16px;
    border-bottom: 1px solid #fff;
    background: transparent;
    box-shadow: none;
  }
  input:required + label::after {
    content: " *";
  }
  input:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  input:focus {
    border: none;
    background: rgba(0, 0, 0, 0.1);
    ~ .text-field__line {
      width: 100%;
      height: 2px;
      background: var(--main-complement-color);
    }
    + label {
      top: 20px;
      transform: translateY(-100%);
      font-size: 0.8rem;
      color: var(--main-complement-color);
    }
  }
  label {
    position: absolute;
    pointer-events: none;
    padding-left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: gray;
    transition: all 0.1s ease;
  }
}
.text-field.is-visited {
  input:invalid {
    box-shadow: none;
    ~ .text-field__error-text {
      display: initial;
    }
    + label {
      top: 20px;
      transform: translateY(-100%);
      font-size: 0.8rem;
      color: red;
    }
  }
  input:required:valid + label {
    top: 20px;
    transform: translateY(-100%);
    font-size: 0.8rem;
    color: lightslategray;
  }
}
.text-field__line {
  position: absolute;
  width: 0;
  height: 0;
  bottom: 0;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.2s ease;
  pointer-events: none;
}
.text-field__error-text {
  position: absolute;
  display: none;
  font-size: 0.7rem;
  bottom: -16px;
  width: 100%;
  padding: 0 12px 0 16px;
  color: red;
}
.text-field__help-text {
  position: absolute;
  font-size: 0.7rem;
  bottom: -16px;
  width: 100%;
  padding: 0 12px 0 16px;
  color: gray;
}
.text-area {
  position: relative;
  text-align: left;
  min-width: 280px;
  height: 384px;
  background: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-bottom: 16px;
  textarea {
    resize: none;
    position: absolute;
    color: #fff;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    padding: 20px 12px 7px 16px;
    border-bottom: 1px solid #fff;
    background: transparent;
    box-shadow: none;
  }
  textarea:required + label::after {
    content: " *";
  }
  textarea:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  textarea:focus {
    border: none;
    background: rgba(0, 0, 0, 0.1);
    ~ .text-area__line {
      width: 100%;
      height: 2px;
      background: var(--main-complement-color);
    }
    + label {
      top: 20px;
      transform: translateY(-100%);
      font-size: 0.8rem;
      color: var(--main-complement-color);
    }
  }

  label {
    position: absolute;
    pointer-events: none;
    padding-left: 16px;
    top: 20px;
    color: gray;
    transition: all 0.1s ease;
  }
}
.text-area.is-visited {
  textarea:invalid {
    box-shadow: none;
    + label {
      top: 20px;
      transform: translateY(-100%);
      font-size: 0.8rem;
      color: red;
    }
  }
  textarea:required:valid + label {
    top: 20px;
    transform: translateY(-100%);
    font-size: 0.8rem;
    color: lightslategray;
  }
}
.text-area__line {
  position: absolute;
  width: 0;
  height: 0;
  bottom: 0;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.2s ease;
  pointer-events: none;
}
.form__terms {
  margin: 1.5rem auto 1.5rem auto;
  font-size: 1rem;
  * {
    font-size: 1rem;
  }
  button {
    transition: color 0.2s ease-in-out;
    &:hover {
      color: var(--main-complement-color);
    }
  }
}
.modal__main * {
  text-align: center;
}
#contact .modal__content {
  color: var(--main-dark-color);
  .modal__link {
    font-weight: 600;
    color: var(--main-dark-color);
    &:hover {
      color: var(--main-complement-color);
    }
  }
}
</style>
