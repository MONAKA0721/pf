import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import haze from '../images/haze.png';
import memopic from '../images/memopic.png';
import memorip from '../images/memorip.png';
import pf from '../images/pf.png';
import waiwai from '../images/waiwai.png';

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    textAlign: "center",
  },
  title: {
    fontFamily: [
      'Noto Sans JP',
      'serif',
    ].join(','),
    whiteSpace: "pre-line",
  },
  tags: {
    fontFamily: [
      '"Arial"',
      'Noto Serif',
    ].join(','),
  },
  description: {
    fontFamily: [
      'Noto Sans JP',
      'serif',
    ].join(','),
    whiteSpace: "pre-line",
  },
}));

console.log(waiwai);

const works = [
  {
    url: 'https://apps.apple.com/jp/app/%E3%83%AF%E3%82%A4%E3%83%AF%E3%82%A4/id1561027910',
    title: `ワイワイ`,
    src: waiwai,
    catchcopy: 'あなたの価値観でみんながワイワイ',
    description: `おしゃべりしながらオンライン対戦できる心理ゲームで、Among Us の次に流行ると巷で噂されてます。
    自分の性格、センス、価値観が問われるので仲間内はもちろん、
    初対面の人の事も手っ取り早く知ることが出来ます。
    `,
    tags: '#Unity #C# #Golang #k8s #nchan'
  },
  {
    url: 'https://www.memopic.net',
    title: 'memopic',
    src: memopic,
    catchcopy: '旅の思い出をプレイリストで振り返ろう',
    description: `旅行中ドライブで聴いてた曲
      あの時流行っていた、好きだった曲から
      思い出を振り返ってみませんか？
      『memopic』はプレイリストで旅を記録する
      新しいサービスです
    `,
    tags: '#Rails #ReactNative #LINEMessagingAPI'
  },
  {
    url: 'https://memorip.net',
    title: 'Memorip',
    src: memorip,
    catchcopy: '旅行プラン作成・共有サイト',
    description: `直感的にプランを作成したり
    簡単にプランを共有したりすることができます
    これからの旅行のしおりとして、また
    他の人のプランを参考にして作成できます
    `,
    tags: '#Rails'
  },
  {
    url: 'https://github.com/MONAKA0721/Airlight-Integral-HAZE',
    title: 'Near Light Soruce HAZE Dataset',
    src: haze,
    catchcopy: '散乱画像データセット',
    description: `散乱除去の研究で使用しているデータセット作成のためのソースコードを公開しています
    近接光源下での散乱をシミュレーションして撮影されます
    `,
    tags: '#Blender #Python #SceneNetRGB-D'
  },
  {
    url: 'https://main.dg6tzh1klqjl4.amplifyapp.com',
    title: 'PF',
    src: pf,
    catchcopy: 'ポートフォリオサイト',
    description: `このサイトです
    以前のポートフォリオを刷新しました
    `,
    tags: '#Gatsby #Material-UI #Amplify'
  },
];

const Works = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="sm">
        <Box mt={15}>
          <Typography color="textPrimary" variant="h3" component="h1" gutterBottom>
            WORKS
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          {works.map((work) => (
            <Grid item xs={12} sm={6}>
              <CardActionArea component="a" href={work.url} target="_blank">
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}>   
                    <img
                      src={work.src}
                      alt={work.title + "Image"}
                      height="280"
                      style={{
                        verticalAlign: 'middle',
                        maxWidth: '100%',
                      }}
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography component="h3" variant="h5" gutterBottom>
                      <Box fontWeight="fontWeightBold" className={classes.title}>
                        {work.title}
                      </Box>
                    </Typography>
                    <Typography variant="subtitle" color="textSecondary" gutterBottom>
                      <Box className={classes.title}>
                        {work.catchcopy}
                      </Box>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      <Box className={classes.description} lineHeight={1.7} my={2}>
                        {work.description}
                      </Box>
                    </Typography>
                    <Typography variant="subtitle1">
                      <Box className={classes.tags}>
                        {work.tags}
                      </Box>
                    </Typography>
                  </CardContent>
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Works;
