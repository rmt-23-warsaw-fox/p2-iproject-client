import firebase from "../firestore";
const db = firebase.collection("/content");
class TutorialDataService {
  getAll() {
    return db;
  }
  create(tutorial) {
    return db.add(tutorial);
  }
  update(id, value) {
    return db.doc(id).update(value);
  }
  delete(id) {
    return db.doc(id).delete();
  }
}
export default new TutorialDataService();