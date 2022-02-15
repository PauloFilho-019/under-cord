import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import React from "react";
import { useRouter } from "next/router";
import appConfig from "../config.json";

function Titulo(props) {
  const Tag = props.tag || "h1";
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals["000"]};
          font-size: 36px;
          font-weight: 500;
        }
      `}</style>
    </>
  );
}

export default function PaginaInicial() {
  // const username = 'omariosouto';
  const [username, setUsername] = React.useState("Git");
  const [followers, setFollowers] = React.useState(0);

  const roteamento = useRouter();

  React.useEffect(() => {
    const getFoll = async () => {
      const response = await fetch(
        `https://api.github.com/users/${username}/followers`
      );
      const foll = await response.json();
      setFollowers(foll.length);
    };
    getFoll();
    //return (await response.json()).length;
  }, [username]);

  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.primary[50],
          backgroundImage:
            "url(https://i.pinimg.com/originals/e1/b9/c5/e1b9c5f696d6f136c3eca1b26ac8c846.gif)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "2px",
            border: "10px black solid",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: appConfig.theme.colors.neutrals[600],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              console.log("Alguém submeteu o form");
              roteamento.push(`/chat?username=${username}`);
              // window.location.href = '/chat';
            }}
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",

              marginBottom: "32px",
            }}
          >
            <Titulo tag="h2">Boas vindas de volta!</Titulo>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                fontFamily: "",
                fontSize: "19px",
                backgroundColor: appConfig.theme.colors.neutrals[500],
                color: appConfig.theme.colors.neutrals[300],
              }}
            >
              {appConfig.name}
            </Text>

            {/* <input
                            type="text"
                            value={username}
                            onChange={function (event) {
                                console.log('usuario digitou', event.target.value);
                                // Onde ta o valor?
                                const valor = event.target.value;
                                // Trocar o valor da variavel
                                // através do React e avise quem precisa
                                setUsername(valor);
                            }}
                        /> */}
            <TextField
              value={username}
              onChange={function (event) {
                console.log("usuario digitou", event.target.value);
                // Onde ta o valor?
                const valor = event.target.value;
                // Trocar o valor da variavel
                // através do React e avise quem precisa
                setUsername(valor);
              }}
              styleSheet={{
                fontSize: "50px",
                borderRadius: "2px",
                border: "black 6px solid",
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type="submit"
              label="VAMOS LÁ ?"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["100"],
                mainColor: appConfig.theme.colors.primary[1000],
                mainColorLight: appConfig.theme.colors.primary[100],
                mainColorStrong: appConfig.theme.colors.primary[300],
                mainColorHighlight: appConfig.theme.colors.primary[500],
              }}
              styleSheet={{
                fontFamily: "",
                fontSize: "50px",
                color: "black",
                padding: "30px",
                borderRadius: "2px",
                border: "black 5px solid",
              }}
            />
          </Box>

          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: "4px solid",
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: "2px",
              flex: 1,
              minHeight: "240px",
            }}
          >
            <Image
              styleSheet={{
                marginTop: "-10px",
                borderRadius: "2px",
                marginBottom: "16px",
                border: "black 4px solid",
                backgroundColor: "#b9d2ff",
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: "3px 1px",
                borderRadius: "2px",
                fontFamily: "",
                fontSize: "40px",
              }}
            >
              {username}
            </Text>
            <Text
              variant="body5"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[400],
                marginTop: "5px",
                borderRadius: "2px",
                fontFamily: "",
                fontSize: "50px",
              }}
            >
              Lv. {followers}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
