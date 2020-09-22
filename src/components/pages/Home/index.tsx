import React, { useEffect, useState } from 'react'
import firebase from '../../../firebase'
import Form from "./form";
import CountUp from "react-countup";
import styles from "./home.module.css";
import Card from "./card";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import Header from "../../organisms/Header"
type moneyField = {
  money: number;
  description: string;
  type: string;
  createdAt: firebase.firestore.FieldValue;
  day: Date
};

const Index: React.FC = () => {
  const [budget, setBudget] = useState<firebase.firestore.DocumentData>()
  const [income, setIncome] = useState<number>()
  const [expence, setExpence] = useState<number>()
  const [totalBudget, setTotalBudget] = useState<number>()
  const thisMonth = new Date();
  const findMonth: number[] = []
  findMonth.push(thisMonth.getMonth() + 1)

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(async (usr: firebase.User | null) => {
      if (!usr) {
        alert("新規登録をしてください");
      } else {
        firebase
          .firestore()
          .collection("budget")
          .orderBy("createdAt", "desc")
          .get()
          .then((querySnapshot: firebase.firestore.QuerySnapshot) => {
            let storeBudget: firebase.firestore.DocumentData[] = []
            let storeIncome: number[] = []
            let storeExpence: number[] = []
            querySnapshot.forEach((docs) => {
              const showBudget = docs.data();
              storeBudget.push(showBudget)
              if (showBudget.type === "inc" && findMonth.includes(9)) {
                const incomeMoney: number = showBudget.money
                storeIncome.push(incomeMoney)
                const sumBetween = (arr: number[]) => {
                  let sum = 0;
                  for (var i = 0, len = arr.length; i < len; ++i) {
                    sum += arr[i];
                  };
                  return sum;
                }
                const sumMoney = sumBetween(storeIncome)
                setIncome(sumMoney)
              } else if (showBudget.type === "exp" && findMonth.includes(9)) {
                const expenceMoney: number = showBudget.money
                storeExpence.push(expenceMoney)
                const decBetween = (arr: number[]) => {
                  let sum = 0;
                  for (var i = 0, len = arr.length; i < len; ++i) {
                    sum += arr[i];
                  };
                  return sum;
                }
                const decMoney = decBetween(storeExpence)
                setExpence(decMoney)
              }
            })
            setBudget(storeBudget)
          })
      }
    });
  }, [setExpence,setIncome]);
  useEffect(() => {
    if (income && expence) {
      setTotalBudget(income - expence)
    }
  }, [income, expence])
  let expArea: JSX.Element[] = []
  let incArea: JSX.Element[] = []
  return (
    <React.Fragment>
      <Header />
      <div className={styles.home}>
        <div className={styles.homeHeader}>
          <h2 className={styles.total}>
            {thisMonth.getMonth() + 1}月の残高は
              {
              totalBudget ? <CountUp
                start={0}
                end={totalBudget}
                duration={2.5}
                separator=","
              /> : null
            }
              円です
            </h2>
          <div className={styles.body}>
            <div className={styles.totalIncome}>
              <h2>Income</h2>
            +
            <span className={styles.income}>
                {income ?
                  <CountUp
                    start={0}
                    end={income}
                    duration={2.5}
                    separator=","
                  /> : null}
              </span>
            </div>
            <div className={styles.Expenses}>
              <h2>Expenses</h2>
            -
            <span className={styles.expence}>
                {expence ?
                  <CountUp
                    start={0}
                    end={expence}
                    duration={2.5}
                    separator=","
                  /> : null} </span>
            </div>
          </div>
          <div>
            <Form
              sendMoney={(text: string, money: number, type: string, date) => {
                const sendMoney: moneyField = {
                  money: money,
                  description: text,
                  type: type,
                  createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                  day: date
                };
                firebase.firestore()
                  .collection("budget")
                  .add(sendMoney);
              }}
            />
          </div>
        </div>
        <div className={styles.card}>
          <Tabs>
            <TabList className={styles.List}>
              <Tab className={styles.tab}>支出</Tab>
              <Tab className={styles.tab}>収入</Tab>
            </TabList>
            {
              budget !== undefined ? budget?.map((item: moneyField, index: number) => {
                return (
                  <div key={index} className={styles.delete}>
                    {
                      item.type === "inc" ? incArea.push(<Card key={index} className="incColor" item={item.description} money={item.money} day={item.day} />) : expArea.push(<Card key={index} className="expColor" item={item.description} money={item.money} day={item.day} />)
                    }
                  </div>
                )
              }) : <p>まだ何も登録されてませんわ</p>
            }
            <TabPanel >
              <div className={styles.colorExp}>
                {expArea}
              </div>
            </TabPanel>
            <TabPanel >
              <div className={styles.colorInc}>
                {incArea}
              </div>
            </TabPanel>
          </Tabs>
        </div >
      </div >
    </React.Fragment>
  )
}
export default Index;
