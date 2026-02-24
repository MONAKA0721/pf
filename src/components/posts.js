import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    textAlign: "center",
    backgroundColor: "#FFF",
  },
  textThumbnail: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    color: "#333",
    fontFamily: "'Noto Sans JP', serif",
    fontWeight: "bold",
    fontSize: "1.2rem",
    padding: theme.spacing(3),
    textAlign: "center",
    lineHeight: 1.6,
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
  date: {
    fontFamily: [
      '"Arial"',
      'serif',
    ].join(','),
  },
}));

const posts = [
  {
    url: 'https://buildersbox.corp-sansan.com/entry/2025/03/21/120000',
    title: 'Amazon S3メタデータのサイズ制限に対するエンコーディング戦略',
    date: '2025/03/21',
    src: 'https://ogimage.blog.st-hatena.com/10257846132608666252/6802418398333492900/1771925952',
    tags: '#AWS #S3 #Base64',
  },
  {
    url: 'https://zenn.dev/monaka0721/articles/82f7c9d3a91806',
    title: `Unity で gRPC するまで
    
    `,
    date: '2021/01/26',
    src: 'https://res.cloudinary.com/zenn/image/upload/s--vnJcz_Tp--/co_rgb:222%2Cg_south_west%2Cl_text:notosansjp-medium.otf_37_bold:MONAKA%2Cx_203%2Cy_98/c_fit%2Cco_rgb:222%2Cg_north_west%2Cl_text:notosansjp-medium.otf_80_bold:Unity%2520%25E3%2581%25A7%2520gRPC%2520%25E3%2581%2599%25E3%2582%258B%25E3%2581%25BE%25E3%2581%25A7%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2o1a1NlN2stR1Y0WVVpWi1qRFlWSnlrQXJEMklVUXFSV1owcl9rVjhnPXM4MC1j%2Cr_max%2Cw_90%2Cx_87%2Cy_72/v1627274783/default/og-base_z4sxah.png',
    tags: '#Unity #gRPC #C#'
  },
  {
    url: 'https://qiita.com/MONAKA0721/items/303b76fa8624cb00179b',
    title: 'Action Cable を解説しながらプログレスバーを実装する',
    date: '2020/08/20',
    src: 'https://staging-qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-1150d8b18a7c15795b701a55ae908f94.png?ixlib=rb-4.0.0&w=1200&mark=https%3A%2F%2Fstaging-qiita-user-contents.imgix.net%2F~text%3Fixlib%3Drb-4.0.0%26w%3D840%26h%3D380%26txt%3D%25E3%2580%2590Rails%25206.0%25E3%2580%2591Action%2520Cable%2520%25E3%2582%2592%25E8%25A7%25A3%25E8%25AA%25AC%25E3%2581%2597%25E3%2581%25AA%25E3%2581%258C%25E3%2582%2589%25E3%2583%2597%25E3%2583%25AD%25E3%2582%25B0%25E3%2583%25AC%25E3%2582%25B9%25E3%2583%2590%25E3%2583%25BC%25E3%2582%2592%25E5%25AE%259F%25E8%25A3%2585%25E3%2581%2599%25E3%2582%258B%26txt-color%3D%2523333%26txt-font%3DHiragino%2520Sans%2520W6%26txt-size%3D54%26txt-clip%3Dellipsis%26txt-align%3Dcenter%252Cmiddle%26s%3D5060e59bea8566e6bafa1df437e4a61b&mark-align=center%2Cmiddle&blend=https%3A%2F%2Fstaging-qiita-user-contents.imgix.net%2F~text%3Fixlib%3Drb-4.0.0%26w%3D840%26h%3D500%26txt%3D%2540MONAKA0721%26txt-color%3D%2523333%26txt-font%3DHiragino%2520Sans%2520W6%26txt-size%3D45%26txt-align%3Dright%252Cbottom%26s%3Def13c70bfbb211737315a090784fcecb&blend-align=center%2Cmiddle&blend-mode=normal&s=753335a6ca74986aa1d30c6091baa730',
    tags: '#ActionCable #Rails #WebSocket'
  },
  {
    url: 'https://hacarus.com/ja/information/tech/20200717-cvat-dicom-ai',
    title: 'CVAT で DICOM をアノテーションできるようになるまで',
    date: '2020/07/17',
    src: null,
    tags: '#CVAT #DICOM #pydicom #Django #Python',
  },
  {
    url: 'https://www.slideshare.net/YuyaSumie/ss-142300342/1',
    title: '複合現実感のためのコンピュータビジョン技術',
    date: '2019/04/26',
    src: 'https://cdn.slidesharecdn.com/ss_thumbnails/computervisionforar-190426072017-thumbnail-4.jpg?cb=1607356697',
    tags: '#AR #カメラ幾何 #SLAM'
  },
];

const Posts = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  
  return (
    <>
      <Container maxWidth="sm">
        <Box id="POSTS" mt={14}>
          &ensp; 
        </Box>
        <Box mt={6}>
          <Typography color="textPrimary" variant="h3" component="h1" gutterBottom>
            POSTS
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          {posts.map((post) => (
            <Grid item xs={12} sm={6} key={post.url}>
              <CardActionArea component="a" href={post.url} target="_blank">
                <Card className={classes.card}>
                  <CardMedia className={post.src ? classes.cardMedia : undefined}>
                    {post.src ? (
                      <img
                        src={post.src}
                        alt={post.title + "Image"}
                        height={matches? '234' : ''}
                        style={{
                          verticalAlign: 'middle',
                          maxWidth: '100%',
                        }}
                      />
                    ) : (
                      <div
                        className={classes.textThumbnail}
                        style={{ height: matches ? 234 : 180 }}
                      >
                        {post.title}
                      </div>
                    )}
                  </CardMedia>
                  <CardContent>
                    <Typography component="h3" variant="h5" gutterBottom>
                      <Box fontWeight="fontWeightBold" className={classes.title} mb={6}>
                        {post.title}
                      </Box>
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      <Box className={classes.tags}>
                        {post.tags}
                      </Box>
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      <Box className={classes.date}>
                        {post.date}
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

export default Posts;
