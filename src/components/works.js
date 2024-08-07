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
    catchcopy: "好きなコンテンツを投稿しよう",
    description: `好きな音楽や映画のURLを投稿して繋がるSNSです。
    SpotifyやApple MusicやYouTubeの音楽コンテンツ、
    NetflixやPrimeVideoの映画コンテンツを投稿できます。
    投稿したコンテンツをもとにおしゃれでカッコいいアートボードを作ることが出来ます。
    サーバーサイドおよびクライアントサイドの実装を担当
    `,
    tags: "#Flutter #Golang #Codemagic",
    url: "https://apps.apple.com/jp/app/memolink/id6444865734",
  },
  {
    title: "SAPIENS",
    src: sapiens,
    catchcopy: "老若男女問わず楽しめるパズルゲーム！",
    description: `ツールを与えてステージクリアを目指すストラテジーゲームです。
    ゲーム会社の内定者に混ざり完成させました。
    キャラクターが可愛いながらも頭を使うゲームになっています。
    アウトゲーム全般の実装を担当
    `,
    tags: "#Unity #C# #Codemagic",
    url: "https://apps.apple.com/au/app/sapiens/id1592483260",
  },
  {
    title: "ぷかぷか島",
    src: pukapuka,
    catchcopy: "内定期間の様々な不安や疑問を、ぷかぷか解決しよう",
    description: `ボトルメールのように気軽に質問を流せるサービスです。
    内定先のハッカソンで作り優勝しました！
    UI の親しみやすさと手軽さを意識しました
    実装部分は主にフロントエンドを担当
    `,
    tags: "#React #ChakraUI #Rails #Firebase",
  },
  {
    url: "https://yowin.gg",
    title: "yowin",
    src: yowin,
    catchcopy: "1タップで、あなたにぴったりと仲間とゲームしよう。",
    description: `Yowinは、AIがあなたのゲームスタイルを分析し、
    最適な仲間を見つけて、つなぐ、マッチングプラットフォームです。
    仲間を見つけるための募集投稿や連絡は不要。
    自動でマッチングしたら、すぐにゲームを開始できます
    `,
    tags: "#Golang #FlexMatch #Discord #ECS",
  },
  {
    url:
      "https://apps.apple.com/jp/app/%E3%83%AF%E3%82%A4%E3%83%AF%E3%82%A4/id1561027910",
    title: "ワイワイ",
    src: waiwai,
    catchcopy: "あなたの価値観でみんながワイワイ",
    description: `おしゃべりしながらオンライン対戦できる心理ゲームで、Among Us の次に流行ると巷で噂されてます。
    自分の性格、センス、価値観が問われるので仲間内はもちろん、
    初対面の人の事も手っ取り早く知ることが出来ます。
    `,
    tags: "#Unity #C# #Golang #k8s #nchan",
  },
  {
    url: "https://www.memopic.net",
    title: "memopic",
    src: memopic,
    catchcopy: "旅の思い出をプレイリストで振り返ろう",
    description: `旅行中ドライブで聴いてた曲
      あの時流行っていた、好きだった曲から
      思い出を振り返ってみませんか？
      『memopic』はプレイリストで旅を記録する
      新しいサービスです
    `,
    tags: "#Rails #ReactNative #LINEMessagingAPI",
  },
  {
    url: "https://memorip.net",
    title: "Memorip",
    src: memorip,
    catchcopy: "旅行プラン作成・共有サイト",
    description: `直感的にプランを作成したり
    簡単にプランを共有したりすることができます
    これからの旅行のしおりとして、また
    他の人のプランを参考にして作成できます
    `,
    tags: "#Rails",
  },
  {
    url: "https://github.com/MONAKA0721/Airlight-Integral-HAZE",
    title: "Near Light Soruce HAZE Dataset",
    src: haze,
    catchcopy: "散乱画像データセット",
    description: `散乱除去の研究で使用しているデータセット作成のためのソースコードを公開しています
    近接光源下での散乱をシミュレーションして撮影されます
    `,
    tags: "#Blender #Python #SceneNetRGB-D",
  },
  {
    url: "https://main.dg6tzh1klqjl4.amplifyapp.com",
    title: "PF",
    src: pf,
    catchcopy: "ポートフォリオサイト",
    description: `このサイトです
    以前のポートフォリオを刷新しました
    `,
    tags: "#Gatsby #Material-UI #Amplify",
  },
];

const Works = () => {
  const classes = useStyles();
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
            <Grid item xs={12} sm={6} key={work.title}>
              <CardActionArea component="a" href={work.url} target="_blank">
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}>
                    <img
                      src={work.src}
                      alt={work.title + "Image"}
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
                        {work.title}
                      </Box>
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      gutterBottom
                    >
                      <Box className={classes.title}>{work.catchcopy}</Box>
                    </Typography>
                    <Typography component="span" variant="body1" gutterBottom>
                      <Box
                        className={classes.description}
                        lineHeight={1.7}
                        my={2}
                      >
                        {work.description}
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
