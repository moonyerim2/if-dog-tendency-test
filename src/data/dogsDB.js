import {
  collection,
  doc,
  getDoc,
  setDoc,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";
import { app } from "./fbase";

// enable, fieldNames = ["name", "id", "mbti", "contents", "img", "counts"]
// onUpdate 는 useState 의 set 함수
// List 는 id 순서로 정렬

class Dogs {
  constructor() {
    this.db = getFirestore(app);
    this.allDogName = {
      retriever: "리트리버",
      beagle: "비글",
      welshCorgi: "웰시코기",
      schnauzer: "슈나우저",
      husky: "시베리안 허스키",
      chihuahua: "치와와",
    };
  }

  // 종으로 검색 데이터 추가 또는 갱신
  // 기존에 있던 데이터는 그대로 추가할 시에 counts++ 갱신
  update = async (species) => {
    const docRef = doc(this.db, "dogs", this.allDogName[species]);
    const docSnap = await getDoc(docRef);
    const dog = docSnap.data();

    const nextCounts = Number(dog.counts) + 1;

    setDoc(docRef, {
      id: dog.id,
      species: dog.species,
      contents: dog.contents,
      img: dog.img,
      counts: nextCounts,
    });
  };

  // species 속성을 통한 데이터 결과 => return Object
  get = (onUpdate, species) => {
    const coll = collection(this.db, "dogs");
    onSnapshot(coll, (snapshot) => {
      const dogObj = snapshot.docs
        .filter((doc) => doc.data().species == species)
        .at(0);
      const dog = {
        ...dogObj.data(),
        name: dogObj.id,
      };
      onUpdate(dog);
    });
  };

  // species 속성을 통한 데이터 결과 => return Object
  getDogById = (onUpdate, id) => {
    const coll = collection(this.db, "dogs");

    onSnapshot(coll, (snapshot) => {
      const dogObj = snapshot.docs.filter((doc) => doc.data().id == id).at(0);
      const dog = {
        ...dogObj.data(),
        name: dogObj.id,
      };
      onUpdate(dog);
    });
  };

  // name 속성을 통한 데이터 결과 => return return List , element type Object
  getRatioNameArr = (onUpdate, total) => {
    const coll = collection(this.db, "dogs");

    onSnapshot(coll, (snapshot) => {
      let datas = [];
      snapshot.docs.map((document) => {
        const dog = document.data();
        datas[dog.id - 1] = {
          value: Math.floor((dog.counts / total) * 100),
          name: document.id,
        };
      });
      onUpdate(datas);
    });
  };

  // id 는 필드값
  // id를 통한 특정 Field의 Value => return String
  getFieldValueById = (onUpdate, id, fieldName) => {
    const coll = collection(this.db, "dogs");

    onSnapshot(coll, (snapshot) => {
      const dogObj = snapshot.docs.filter((doc) => doc.data().id == id).at(0);
      let fieldVal = "";

      if (fieldName == "name") {
        fieldVal = dogObj.id;
      } else {
        fieldVal = dogObj.data()[fieldName];
      }

      onUpdate(fieldVal);
    });
  };

  // species 는 필드값
  // species를 통한 특정 Field의 Value => return String
  getFieldValueBySpecies = (onUpdate, species, fieldName) => {
    const coll = collection(this.db, "dogs");

    onSnapshot(coll, (snapshot) => {
      const dogObj = snapshot.docs
        .filter((doc) => doc.data().species == species)
        .at(0);
      let fieldVal = "";

      if (fieldName == "name") {
        fieldVal = dogObj.id;
      } else {
        fieldVal = dogObj.data()[fieldName];
      }

      onUpdate(fieldVal);
    });
  };

  // DB에서 특정 Field의 Values => return List
  getFieldValues = (onUpdate, fieldName) => {
    const coll = collection(this.db, "dogs");

    onSnapshot(coll, (snapshot) => {
      let datas = [];

      snapshot.docs.map((document) => {
        const dog = document.data();
        if (fieldName == "name") {
          datas[dog.id - 1] = document.id;
        } else {
          datas[dog.id - 1] = dog[fieldName];
        }
      });

      onUpdate(datas);
    });
  };

  // 총 참여자수 => return Number
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

  // 각 data 의 비율 => return List
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
