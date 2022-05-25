<template>
  <section class="appoinment section">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="mt-3">
            <div class="feature-icon mb-3">
              <i class="icofont-support text-lg"></i>
            </div>
            <span class="h3">Call for an Emergency Service!</span>
            <h2 class="text-color mt-3">+84 789 1256</h2>
          </div>
        </div>

        <div class="col-lg-8">
          <div class="appoinment-wrap mt-5 mt-lg-0 pl-lg-5">
            <h2 class="mb-2 title-color">Symptomp Checker</h2>
            <p class="mb-4">
              With the power of A.I., we revolutionize the way to diagnose
              ailments based on symptomps
            </p>
            <form id="#" class="appoinment-form" method="post" action="#">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label class="control-label" for="appointmentfor"
                      >Symptomp 1:</label
                    >
                    <select
                      v-model="input.symptomp1"
                      id="brow"
                      class="form-control"
                    >
                      <option selected value></option>
                      <option value="175">Chills</option>
                      <option value="15">Cough</option>
                      <option value="207">Dizziness</option>
                      <option value="244">Drooping eyelid</option>
                      <option value="11">Fever</option>
                      <option value="33">Eye redness</option>
                      <option value="45">Heartburn</option>
                      <option value="73">Itching eyes</option>
                      <option value="44">Nausea</option>
                      <option value="12">Pain in the limbs</option>
                    </select>
                  </div>
                </div>
                <br />
                <br />
                <div class="col-lg-6">
                  <div class="form-group">
                    <label class="control-label" for="appointmentfor"
                      >Symptomp 2:</label
                    >
                    <select
                      v-model="input.symptomp2"
                      id="brow"
                      class="form-control"
                    >
                      <option selected value></option>
                      <option v-if="input.symptomp1 !== '175'" value="175">
                        Chills
                      </option>
                      <option v-if="input.symptomp1 !== '15'" value="15">
                        Cough
                      </option>
                      <option v-if="input.symptomp1 !== '207'" value="207">
                        Dizziness
                      </option>
                      <option v-if="input.symptomp1 !== '244'" value="244">
                        Drooping eyelid
                      </option>
                      <option v-if="input.symptomp1 !== '11'" value="11">
                        Fever
                      </option>
                      <option v-if="input.symptomp1 !== '33'" value="33">
                        Eye redness
                      </option>
                      <option v-if="input.symptomp1 !== '45'" value="45">
                        Heartburn
                      </option>
                      <option v-if="input.symptomp1 !== '73'" value="73">
                        Itching eyes
                      </option>
                      <option v-if="input.symptomp1 !== '44'" value="44">
                        Nausea
                      </option>
                      <option v-if="input.symptomp1 !== '12'" value="12">
                        Pain in the limbs
                      </option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label class="control-label" for="appointmentfor"
                      >Symptomp 3:</label
                    >
                    <select
                      v-model="input.symptomp3"
                      id="brow"
                      class="form-control"
                    >
                      <option selected value></option>
                      <option
                        v-if="
                          input.symptomp1 !== '175' && input.symptomp2 !== '175'
                        "
                        value="175"
                      >
                        Chills
                      </option>
                      <option
                        v-if="
                          input.symptomp1 !== '15' && input.symptomp2 !== '15'
                        "
                        value="15"
                      >
                        Cough
                      </option>
                      <option
                        v-if="
                          input.symptomp1 !== '207' && input.symptomp2 !== '207'
                        "
                        value="207"
                      >
                        Dizziness
                      </option>
                      <option
                        v-if="
                          input.symptomp1 !== '244' && input.symptomp2 !== '244'
                        "
                        value="244"
                      >
                        Drooping eyelid
                      </option>
                      <option
                        v-if="
                          input.symptomp1 !== '11' && input.symptomp2 !== '11'
                        "
                        value="11"
                      >
                        Fever
                      </option>
                      <option
                        v-if="
                          input.symptomp1 !== '33' && input.symptomp2 !== '33'
                        "
                        value="33"
                      >
                        Eye redness
                      </option>
                      <option
                        v-if="
                          input.symptomp1 !== '45' && input.symptomp2 !== '45'
                        "
                        value="45"
                      >
                        Heartburn
                      </option>
                      <option
                        v-if="
                          input.symptomp1 !== '73' && input.symptomp2 !== '73'
                        "
                        value="73"
                      >
                        Itching eyes
                      </option>
                      <option
                        v-if="
                          input.symptomp1 !== '44' && input.symptomp2 !== '44'
                        "
                        value="44"
                      >
                        Nausea
                      </option>
                      <option
                        v-if="
                          input.symptomp1 !== '12' && input.symptomp2 !== '12'
                        "
                        value="12"
                      >
                        Pain in the limbs
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <a
                @click.prevent="doDiagnose2()"
                class="btn btn-main btn-round-full"
                href="confirmation.html"
                >Diagnose Now<i class="icofont-simple-right ml-2"></i
              ></a>
              <br />
              <br />
              <div class="form-group-2 mb-4">
                <div v-for="(element, index) in ailments.data" :key="index">
                  <h3>
                    {{ index + 1 }}. Name: {{ element.Issue.Name }} /
                    {{ element.Issue.ProfName }}
                  </h3>
                  <h5>IcdName: {{ element.Issue.IcdName }}</h5>
                  <h5>
                    Recommended consultation:
                    <li
                      v-for="(x, index) in element.Specialisation"
                      :key="index"
                    >
                      {{ x.Name }}
                    </li>
                  </h5>
                </div>
              </div>

              <a
                @click.prevent="doAppointment()"
                v-if="ailments.data"
                class="btn btn-main btn-round-full"
                href="confirmation.html"
                >Make Appoinment<i class="icofont-simple-right ml-2"></i
              ></a>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      input: {
        symptomp1: "",
        symptomp2: "",
        symptomp3: "",
      },
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["diagnose"]),
    doDiagnose2() {
      console.log("diagnose >>>", this.input);
      this.diagnose(this.input);
    },
    doAppointment() {
      //   this.$router.push("/appoint");
      this.$router.push({ path: "appoint", query: { page: "1" } });
    },
  },
  computed: {
    ...mapState(useCounterStore, ["ailments"]),
  },
};
</script>
