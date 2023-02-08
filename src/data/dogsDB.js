import {
  collection,
  doc,
  getDoc,
  setDoc,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";
import { app } from "./fbase";

class Dogs {
  constructor() {
    this.db = getFirestore(app);
  }

  add = async (dog) => {
    const docRef = doc(this.db, "dogs", dog.name);
    const docSnap = await getDoc(docRef);
    const nextCounts = Number(docSnap.data().counts) + 1;

    setDoc(docRef, {
      id: dog.id,
      mbti: dog.mbti,
      contents: dog.contents,
      img: dog.img,
      counts: nextCounts,
    });
  };

  get = (onUpdate, name) => {
    const coll = collection(this.db, "dogs");

    onSnapshot(coll, (snapshot) => {
      const dogObj = snapshot.docs.filter((doc) => doc.id == name).at(0);
      const dog = {
        ...dogObj.data(),
        name: dogObj.id,
      };
      onUpdate(dog);
    });
  };

  getColumnDatas = (onUpdate, element) => {
    const coll = collection(this.db, "dogs");

    onSnapshot(coll, (snapshot) => {
      let datas = [];

      snapshot.docs.map((document) => {
        const dog = document.data();
        if (element == "name") {
          datas[dog.id - 1] = document.id;
        } else {
          datas[dog.id - 1] = dog[element];
        }
      });

      onUpdate(datas);
    });
  };

  getParticipants = (onUpdate) => {
    const coll = collection(this.db, "dogs");

    onSnapshot(coll, (snapshot) => {
      let totalCounts = 0;
      snapshot.docs.map((document) => {
        totalCounts += document.data().counts;
      });
      onUpdate(totalCounts);
    });
  };

  getRatios = (onUpdate, totalCounts) => {
    const coll = collection(this.db, "dogs");

    onSnapshot(coll, (snapshot) => {
      let ratios = [];

      snapshot.docs.map((document) => {
        const dog = document.data();
        ratios[dog.id - 1] = Math.floor((dog.counts / totalCounts) * 100);
      });

      onUpdate(ratios);
    });
  };
}
export default Dogs;
