import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from "react";
import { useT } from "../i18n";
import haze from "../images/haze.png";
import memolink from "../images/memolink.png";
import memopic from "../images/memopic.png";
import memorip from "../images/memorip.png";
import pf from "../images/pf.png";
import pukapuka from "../images/pukapuka.png";
import sapiens from "../images/sapiens.png";
import waiwai from "../images/waiwai.png";
import yowin from "../images/yowin.png";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    textAlign: "center",
  },
  title: {
    fontFamily: ["Noto Sans JP", "serif"].join(","),
    whiteSpace: "pre-line",
  },
  tags: {
    fontFamily: ['"Arial"', "Noto Serif"].join(","),
  },
  description: {
    fontFamily: ["Noto Sans JP", "serif"].join(","),
    whiteSpace: "pre-line",
  },
}));

const works = [
  {
    title: "MemoLink",
    src: memolink,
    catchcopy: {
      ja: "好きなコンテンツを投稿しよう",
      en: "Post the content you love",
    },
    description: {
      ja: `好きな音楽や映画のURLを投稿して繋がるSNSです。
    SpotifyやApple MusicやYouTubeの音楽コンテンツ、
    NetflixやPrimeVideoの映画コンテンツを投稿できます。
    投稿したコンテンツをもとにおしゃれでカッコいいアートボードを作ることが出来ます。
    サーバーサイドおよびクライアントサイドの実装を担当
    `,
      en: `A social app where you connect by posting links to your favorite music and movies.
    Supports music from Spotify, Apple Music, and YouTube,
    and movies from Netflix and Prime Video.
    You can turn your posts into stylish art boards.
    Responsible for both the server side and the client side
    `,
    },
    tags: "#Flutter #Golang #Codemagic",
    url: "https://apps.apple.com/jp/app/memolink/id6444865734",
  },
  {
    title: "SAPIENS",
    src: sapiens,
    catchcopy: {
      ja: "老若男女問わず楽しめるパズルゲーム！",
      en: "A puzzle game for all ages!",
    },
    description: {
      ja: `ツールを与えてステージクリアを目指すストラテジーゲームです。
    ゲーム会社の内定者に混ざり完成させました。
    キャラクターが可愛いながらも頭を使うゲームになっています。
    アウトゲーム全般の実装を担当
    `,
      en: `A strategy game where you hand out tools and aim to clear each stage.
    Completed together with the incoming hires of a game company.
    The characters are cute, but the game makes you think.
    Responsible for the entire out-of-game implementation
    `,
    },
    tags: "#Unity #C# #Codemagic",
    url: "https://apps.apple.com/au/app/sapiens/id1592483260",
  },
  {
    title: { ja: "ぷかぷか島", en: "Pukapuka Island" },
    src: pukapuka,
    catchcopy: {
      ja: "内定期間の様々な不安や疑問を、ぷかぷか解決しよう",
      en: "Float away the worries and questions you have before your first day",
    },
    description: {
      ja: `ボトルメールのように気軽に質問を流せるサービスです。
    内定先のハッカソンで作り優勝しました！
    UI の親しみやすさと手軽さを意識しました
    実装部分は主にフロントエンドを担当
    `,
      en: `A service that lets you casually send out questions like messages in a bottle.
    Built at a hackathon held by my future employer, and we won!
    Focused on a friendly, easy-to-use UI.
    Mainly responsible for the frontend
    `,
    },
    tags: "#React #ChakraUI #Rails #Firebase",
  },
  {
    url: "https://yowin.gg",
    title: "yowin",
    src: yowin,
    catchcopy: {
      ja: "1タップで、あなたにぴったりと仲間とゲームしよう。",
      en: "One tap to play with teammates who fit you.",
    },
    description: {
      ja: `Yowinは、AIがあなたのゲームスタイルを分析し、
    最適な仲間を見つけて、つなぐ、マッチングプラットフォームです。
    仲間を見つけるための募集投稿や連絡は不要。
    自動でマッチングしたら、すぐにゲームを開始できます
    `,
      en: `Yowin is a matching platform where AI analyzes your play style,
    finds the best teammates for you, and connects you.
    No recruiting posts or messaging needed to find a party.
    Once you're matched automatically, you can start playing right away
    `,
    },
    tags: "#Golang #FlexMatch #Discord #ECS",
  },
  {
    url:
      "https://apps.apple.com/jp/app/%E3%83%AF%E3%82%A4%E3%83%AF%E3%82%A4/id1561027910",
    title: { ja: "ワイワイ", en: "Waiwai" },
    src: waiwai,
    catchcopy: {
      ja: "あなたの価値観でみんながワイワイ",
      en: "Everyone gets loud over your values",
    },
    description: {
      ja: `おしゃべりしながらオンライン対戦できる心理ゲームで、Among Us の次に流行ると巷で噂されてます。
    自分の性格、センス、価値観が問われるので仲間内はもちろん、
    初対面の人の事も手っ取り早く知ることが出来ます。
    `,
      en: `A psychological party game you play online while chatting. Rumor has it that it will be the next big thing after Among Us.
    It tests your personality, taste, and values, so it's a quick way to get to know
    people you've just met as well as your friends.
    `,
    },
    tags: "#Unity #C# #Golang #k8s #nchan",
  },
  {
    url: "https://www.memopic.net",
    title: "memopic",
    src: memopic,
    catchcopy: {
      ja: "旅の思い出をプレイリストで振り返ろう",
      en: "Relive your travel memories through playlists",
    },
    description: {
      ja: `旅行中ドライブで聴いてた曲
      あの時流行っていた、好きだった曲から
      思い出を振り返ってみませんか？
      『memopic』はプレイリストで旅を記録する
      新しいサービスです
    `,
      en: `The songs you played on that road trip,
      the songs that were popular back then, the songs you loved.
      Why not look back on your memories through them?
      memopic is a new service
      for recording your travels as playlists
    `,
    },
    tags: "#Rails #ReactNative #LINEMessagingAPI",
  },
  {
    url: "https://memorip.net",
    title: "Memorip",
    src: memorip,
    catchcopy: {
      ja: "旅行プラン作成・共有サイト",
      en: "A site for creating and sharing travel plans",
    },
    description: {
      ja: `直感的にプランを作成したり
    簡単にプランを共有したりすることができます
    これからの旅行のしおりとして、また
    他の人のプランを参考にして作成できます
    `,
      en: `Create plans intuitively
    and share them with ease.
    Use it as an itinerary for your next trip,
    or build your own plan based on other people's
    `,
    },
    tags: "#Rails",
  },
  {
    url: "https://github.com/MONAKA0721/Airlight-Integral-HAZE",
    title: "Near Light Soruce HAZE Dataset",
    src: haze,
    catchcopy: {
      ja: "散乱画像データセット",
      en: "Scattering image dataset",
    },
    description: {
      ja: `散乱除去の研究で使用しているデータセット作成のためのソースコードを公開しています
    近接光源下での散乱をシミュレーションして撮影されます
    `,
      en: `Source code for generating the dataset used in my research on scattering removal.
    Images are rendered by simulating scattering under a near light source
    `,
    },
    tags: "#Blender #Python #SceneNetRGB-D",
  },
  {
    url: "https://main.dg6tzh1klqjl4.amplifyapp.com",
    title: "PF",
    src: pf,
    catchcopy: { ja: "ポートフォリオサイト", en: "Portfolio site" },
    description: {
      ja: `このサイトです
    以前のポートフォリオを刷新しました
    `,
      en: `This very site.
    A redesign of my previous portfolio
    `,
    },
    tags: "#Gatsby #Material-UI #Amplify",
  },
];

const Works = () => {
  const classes = useStyles();
  const t = useT();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <Container maxWidth="sm">
        <Box id="WORKS" mt={14}>
          &ensp;
        </Box>
        <Box mt={6}>
          <Typography
            color="textPrimary"
            variant="h3"
            component="h1"
            gutterBottom
          >
            WORKS
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          {works.map((work) => (
            <Grid item xs={12} sm={6} key={work.src}>
              <CardActionArea component="a" href={work.url} target="_blank">
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}>
                    <img
                      src={work.src}
                      alt={t(work.title) + " image"}
                      height={matches ? "285" : ""}
                      style={{
                        verticalAlign: "middle",
                        maxWidth: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography component="h3" variant="h5" gutterBottom>
                      <Box
                        fontWeight="fontWeightBold"
                        className={classes.title}
                      >
                        {t(work.title)}
                      </Box>
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      gutterBottom
                    >
                      <Box className={classes.title}>{t(work.catchcopy)}</Box>
                    </Typography>
                    <Typography component="span" variant="body1" gutterBottom>
                      <Box
                        className={classes.description}
                        lineHeight={1.7}
                        my={2}
                      >
                        {t(work.description)}
                      </Box>
                    </Typography>
                    <Typography variant="subtitle1">
                      <Box className={classes.tags}>{work.tags}</Box>
                    </Typography>
                  </CardContent>
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Works;
