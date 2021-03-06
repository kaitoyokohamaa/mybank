import React, { useState, useEffect } from "react";
import { EditOutlined } from "@ant-design/icons";
import { useGetUid } from "hooks/useGetUid";
import firebase from "firebase/app";
import "firebase/firestore";
import { TextInput } from "components/input";
import { TableButton } from "components/Button";
export default function TabelContentsArea(props: {
  money: number;
  id: string;
  type: string;
}) {
  const [isEditing, setIsEditing] = useState<boolean>(true);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [getBankID, setGetBankID] = useState<string>();
  const [changedMoney, setChangedMoney] = useState<number>(props.money);
  const [getUserFiledsID, setGetUserFiledsID] = useState<string>();
  const [functions] = useGetUid();
  const currentUserId = functions.currentUserId;
  const ref = firebase.firestore().collection("User");
  useEffect(() => {
    let useBankID: string;
    ref.onSnapshot((usersDocs) => {
      usersDocs.forEach((contens) => {
        if (contens.data().userID[0].includes(currentUserId)) {
          const bankID = contens.id;
          useBankID = contens.id;
          setGetBankID(bankID);
        }
      });
    });
  }, [currentUserId]);

  // 自分がアップデートしたい箇所IDを取得する
  useEffect(() => {
    if (getBankID) {
      ref
        .doc(getBankID)
        .collection("bank")
        .onSnapshot(async (userDocs: firebase.firestore.DocumentData) => {
          await userDocs.forEach(
            (userContents: firebase.firestore.DocumentData) => {
              if (userContents.data().id === props.id) {
                setGetUserFiledsID(userContents.id);
              }
            }
          );
        });
    }
  }, [getBankID]);

  const handleClick = () => {
    ref
      .doc(getBankID)
      .collection("bank")
      .doc(getUserFiledsID)
      .update({ money: changedMoney });
    setIsHover(false);
    setTimeout(() => {
      setIsEditing(true);
    }, 1000);
  };

  return isEditing ? (
    <>
      <th
        className="w-40  p-4 "
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {props.type === "exp" ? (
          <span>-{props.money}</span>
        ) : (
          <>{props.money}</>
        )}

        {isHover && <EditOutlined onClick={() => setIsEditing(false)} />}
      </th>
    </>
  ) : (
    <th>
      <TextInput
        onChange={(e) => setChangedMoney(Number(e.target.value))}
        value={changedMoney}
      />
      <TableButton
        onClick={handleClick}
     />
       
    </th>
  );
}
