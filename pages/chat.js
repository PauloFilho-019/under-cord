import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import React from "react";
import appConfig from "../config.json";
import { useRouter } from "next/router";
import { createClient } from "@supabase/supabase-js";
import { ButtonSendSticker } from "../src/components/ButtonSendSticker";

const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzQwNjM5NywiZXhwIjoxOTU4OTgyMzk3fQ.deRaYuCM01B4t4ghxZ-I69zIfSzPqnZmSu6YDOWOeLk";
const SUPABASE_URL = "https://xkjbnkskqtdtcnxhzara.supabase.co";
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function escutaMensagensEmTempoReal(adicionaMensagem) {
  return supabaseClient
    .from("mensagens")
    .on("INSERT", (respostaLive) => {
      adicionaMensagem(respostaLive.new);
    })
    .subscribe();
}

export default function ChatPage() {
  const roteamento = useRouter();
  const usuarioLogado = roteamento.query.username;
  const [mensagem, setMensagem] = React.useState("");
  const [listaDeMensagens, setListaDeMensagens] = React.useState([]);

  React.useEffect(() => {
    supabaseClient
      .from("mensagens")
      .select("*")
      .order("id", { ascending: false })
      .then(({ data }) => {
        // console.log('Dados da consulta:', data);
        setListaDeMensagens(data);
      });

    const subscription = escutaMensagensEmTempoReal((novaMensagem) => {
      console.log("Nova mensagem:", novaMensagem);
      console.log("listaDeMensagens:", listaDeMensagens);
      // Quero reusar um valor de referencia (objeto/array)
      // Passar uma função pro setState

      setListaDeMensagens((valorAtualDaLista) => {
        console.log("valorAtualDaLista:", valorAtualDaLista);
        return [novaMensagem, ...valorAtualDaLista];
      });
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  function handleNovaMensagem(novaMensagem) {
    const mensagem = {
      id: listaDeMensagens.length + 1,
      from: usuarioLogado,
      text: novaMensagem,
    };

    supabaseClient

      .from("mensagens")
      .insert([
        // Tem que ser um objeto com os MESMOS CAMPOS que você escreveu no supabase
        mensagem,
      ])
      .then(({ data }) => {
        console.log("Criando mensagem: ", data);
      });

    setMensagem("");
  }

  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appConfig.theme.colors.primary[100],
        backgroundImage:
          "url(https://images.squarespace-cdn.com/content/v1/551a19f8e4b0e8322a93850a/1539582971600-DG58HMN0UGJ6B3ARA5K3/Intro_Image.gif)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        color: appConfig.theme.colors.neutrals["000"],
      }}
    >
      <Box
        styleSheet={{
          marginTop: "-60px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          height: "100%",
          maxWidth: "65%",
          maxHeight: "109vh",
          padding: "50px",
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: "relative",
            display: "flex",
            flex: 1,

            height: "90%",
            borderRadius: "4px",
            border: "black 6px solid",
            backgroundColor: appConfig.theme.colors.neutrals[500],
            flexDirection: "column",
            padding: "16px",
          }}
        >
          <MessageList mensagens={listaDeMensagens} />
          {/* {listaDeMensagens.map((mensagemAtual) => {
                        return (
                            <li key={mensagemAtual.id}>
                                {mensagemAtual.de}: {mensagemAtual.texto}
                            </li>
                        )
                    })} */}
          <Box
            as="form"
            styleSheet={{
              marginRight: "-10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              value={mensagem}
              onChange={(event) => {
                const valor = event.target.value;
                setMensagem(valor);
              }}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  handleNovaMensagem(mensagem);
                }
              }}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={{
                width: "100%",
                border: "0",
                fontSize: "35px",
                resize: "none",
                border: "4px solid",
                borderColor: appConfig.theme.colors.neutrals[600],
                borderRadius: "2px",
                padding: "30px 8px",
                backgroundColor: appConfig.theme.colors.neutrals[400],
                marginRight: "9px",
                marginLeft: "-12px",
                marginBottom: "-20px",
              }}
            />
            {/* CallBack */}
            <ButtonSendSticker
              onStickerClick={(sticker) => {
                // console.log('[USANDO O COMPONENTE] Salva esse sticker no banco', sticker);
                handleNovaMensagem(":sticker: " + sticker);
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: "100%",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text variant="heading5">Chat</Text>
        <Button
          variant="tertiary"
          colorVariant="neutral"
          label="Logout"
          href="/"
        />
      </Box>
    </>
  );
}

function MessageList(props) {
  // console.log(props);
  return (
    <Box
      tag="ul"
      styleSheet={{
        overflow: "scroll",
        display: "flex",
        flexDirection: "column-reverse",
        flex: 1,
        color: appConfig.theme.colors.neutrals["000"],
        marginBottom: "16px",
        margin: 2,
      }}
    >
      {props.mensagens.map((mensagem) => {
        return (
          <Text
            key={mensagem.id}
            tag="li"
            styleSheet={{
              fontSize: " 24px",
              borderRadius: "5px",
              padding: "6px",
              marginBottom: "12px",
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[500],
              },
            }}
          >
            <Box
              styleSheet={{
                marginBottom: "8px",
              }}
            >
              <Image
                styleSheet={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                  display: "inline-block",
                  marginRight: "8px",
                }}
                src={`https://github.com/${mensagem.from}.png`}
              />
              <Text
                tag="strong"
                styleSheet={{
                  backgroundColor: "#66B2FF",
                  paddingLeft: "4px",
                  paddingRight: "4px",
                  border: "4px solid black",
                  fontSize: "36px",
                }}
              >
                {mensagem.from}
              </Text>
              <Text
                styleSheet={{
                  fontSize: "30px",
                  marginLeft: "8px",
                  color: appConfig.theme.colors.neutrals[300],
                }}
                tag="span"
              >
                {new Date().toLocaleDateString()}
              </Text>
            </Box>
            {/* [Declarativo] */}
            {/* Condicional: {mensagem.texto.startsWith(':sticker:').toString()} */}
            {mensagem.text.startsWith(":sticker:") ? (
              <Image
                src={mensagem.text.replace(":sticker:", "")}
                styleSheet={{
                  margin: "20px",
                  width: "20%",
                }}
              />
            ) : (
              mensagem.text
            )}
            {/* if mensagem de texto possui stickers:
                           mostra a imagem
                        else 
                           mensagem.texto */}
            {/* {mensagem.texto} */}
          </Text>
        );
      })}
    </Box>
  );
}
