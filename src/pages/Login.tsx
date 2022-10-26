import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const doLogin = () => {
    //auth stuff wouyld go here
    navigation.push("/app", "root", "replace");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton expand="full" onClick={() => doLogin()}>
          Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};
export default Login;
