<script>
import { mapState} from "pinia";
import DataService from "../service/dataService";
import { useCounterStore } from "../stores/counter";
export default {
  name: "chatMessage",
  data() {
    return {
      value: {
        inputMessage: "",
      },
      message: [],
    };
  },
  computed: {
    ...mapState(useCounterStore, ["user"]),
  },
  methods: {
    sendMessage() {
      if (this.value.inputMessage === "" || this.value.inputMessage === null) {
        return;
      }
      let data = {
        username: this.user,
        messages: this.value.inputMessage,
      };
      DataService.create(data)
        .then(() => {
          this.message.push(data);
          this.value.inputMessage = "";
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    DataService.getAll(this.message).on("value", (snapshot) => {
      const data = snapshot.val();
      let messages = [];

      Object.keys(data).forEach((key) => {
        messages.push({
          id: key,
          username: data[key].username,
          messages: data[key].messages,
        });
      });
      this.message = messages;
    });
  },
};
</script>

<template>
  <div class="view chat">
    <section class="chat-box">
      <div
        v-for="el in this.message"
        :key="el.id"
        :class="el.username == this.user ? 'message current-user' : 'message'"
      >
        <div class="message-inner">
          <div class="username">{{ el.username }}</div>
          <div class="content">{{ el.messages }}</div>
        </div>
      </div>
    </section>

    <footer>
      <form @submit.prevent="sendMessage">
        <input
          type="text"
          v-model="value.inputMessage"
          placeholder="Write a message..."
        />
        <input type="submit" value="Send" />
      </form>
    </footer>
  </div>
</template>

<style lang="scss">
.view {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: #ea526f;

  &.login {
    align-items: center;
    .login-form {
      display: block;
      width: 100%;
      padding: 15px;

      .form-inner {
        display: block;
        background-color: #fff;
        padding: 50px 15px;
        border-radius: 16px;
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
        h1 {
          color: #aaa;
          font-size: 28px;
          margin-bottom: 30px;
        }
        label {
          display: block;
          margin-bottom: 5px;
          color: #aaa;
          font-size: 16px;
          transition: 0.4s;
        }
        input[type="text"] {
          appearance: none;
          border: none;
          outline: none;
          background: none;
          display: block;
          width: 100%;
          padding: 10px 15px;
          border-radius: 8px;
          margin-bottom: 15px;

          color: #333;
          font-size: 18px;
          box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
          background-color: #f3f3f3;
          transition: 0.4s;
          &::placeholder {
            color: #888;
            transition: 0.4s;
          }
        }
        input[type="submit"] {
          appearance: none;
          border: none;
          outline: none;
          background: none;
          display: block;
          width: 100%;
          padding: 10px 15px;
          background-color: #ea526f;
          border-radius: 8px;
          color: #fff;
          font-size: 18px;
          font-weight: 700;
        }
        &:focus-within {
          label {
            color: #ea526f;
          }
          input[type="text"] {
            background-color: #fff;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
            &::placeholder {
              color: #666;
            }
          }
        }
      }
    }
  }
  &.chat {
    flex-direction: column;
    .chat-box {
      border-radius: 24px 24px 0px 0px;
      background-color: #fff;
      box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
      flex: 1 1 100%;
      padding: 30px;
      .message {
        display: flex;
        margin-bottom: 15px;

        .message-inner {
          .username {
            color: #888;
            font-size: 16px;
            margin-bottom: 5px;
            padding-left: 15px;
            padding-right: 15px;
          }
          .content {
            display: inline-block;
            padding: 10px 20px;
            background-color: #f3f3f3;
            border-radius: 999px;
            color: #333;
            font-size: 18px;
            line-height: 1.2em;
            text-align: left;
          }
        }
        &.current-user {
          margin-top: 30px;
          justify-content: flex-end;
          text-align: right;
          .message-inner {
            max-width: 75%;
            .content {
              color: #fff;
              font-weight: 600;
              background-color: #ea526f;
            }
          }
        }
      }
    }
    footer {
      position: sticky;
      bottom: 0px;
      background-color: #fff;
      padding: 30px;
      box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
      form {
        display: flex;
        input[type="text"] {
          flex: 1 1 100%;
          appearance: none;
          border: none;
          outline: none;
          background: none;
          display: block;
          width: 100%;
          padding: 10px 15px;
          border-radius: 8px 0px 0px 8px;

          color: #333;
          font-size: 18px;
          box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
          background-color: #f3f3f3;
          transition: 0.4s;
          &::placeholder {
            color: #888;
            transition: 0.4s;
          }
        }

        input[type="submit"] {
          appearance: none;
          border: none;
          outline: none;
          background: none;
          display: block;
          padding: 10px 15px;
          border-radius: 0px 8px 8px 0px;
          background-color: #ea526f;
          color: #fff;
          font-size: 18px;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
