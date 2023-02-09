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

  // 데이터 추가 또는 갱신
  // 기존에 있던 데이터는 그대로 추가할 시에 counts++ 갱신
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

  // name 속성을 통한 데이터 결과 반환
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

  // DB에서 특정 column 리스트 형태로 반환
  // enable, cols = ["name", "id", "mbti", "contents", "img", "counts"]
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

  // 총 참여자수 반환
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

  // 각 data 의 비율 리스트 형태로 반환
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
