import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import React from 'react';

const useStyles = makeStyles(() => ({
  date: {
    fontFamily: [
      'Noto Sans JP',
      'serif',
    ].join(','),
  },
  company: {
    fontFamily: [
      'Noto Sans JP',
      'serif',
    ].join(','),
  },
  description: {
    fontFamily: [
      'Noto Sans JP',
      'serif',
    ].join(','),
    whiteSpace: "pre-line",
  },
}))

const careers = [
  {
    date: '2022/4 ~ NOW',
    company: 'Sansan株式会社',
    description: `新卒入社
                  セミナー管理システム Seminar One の開発に携わっています`,
  },
  {
    date: '2020/8 ~ 2022/3',
    company: '株式会社マネーフォワード',
    description: `京都開発拠点長期インターン
                  KTA(京都開発本部テクニカルアーキテクトグループ)で Go を中心技術とした性能改善を行っていました`,
  },
  {
    date: '2019/10 ~ 2022/3',
    company: '株式会社HACARUS',
    description: `長期インターン
                  機械学習を用いたプロダクトのデモWebアプリ作成や各プロジェクトの CI 整備を担っていました`,
  },
  {
    date: '2021/4 ~ 2022/2',
    company: 'Crosshare株式会社',
    description: `業務委託開発
                  オンラインゲームにおけるフレンドマッチングに新しい体験をもたらす新サービス開発にバックエンドエンジニアとして関わっていましたs`,
  },
  {
    date: '2020/9',
    company: 'teamLab Inc.',
    description: `就業形インターン
                  EC 用 Rails フレームワーク Spree を用いた社内共通基盤の新機能開発に携わりました`,
  },
  {
    date: '2020/9',
    company: '株式会社ハウテレビジョン',
    description: `サマーインターン
                  Go を用いた自社サービスの新機能開発プログラムにバックエンドエンジニアとして参加しました`,
  },
  {
    date: '2020/9',
    company: 'Sansan株式会社',
    description: `1day インターン
                  名刺管理アプリの開発を体験するプログラムに参加しました`,
  },
  {
    date: '2020/8',
    company: '株式会社ブレインパッド',
    description: `サマーインターン
                  自社製マッチングエンジン Conomi の魅力を伝えるデモアプリ制作を1週間で行いました`,
  },
  {
    date: '2020/8',
    company: 'クックパッド株式会社',
    description: `Online Summer Internship 2020
                  サービス開発の手法をアイデア出しの段階から形にするまで学ぶプログラムに参加し、一人暮らしの料理を楽しくするサービス開発を行いました`,
  },
  {
    date: '2020/4',
    company: 'クックパッド株式会社',
    description: `スプリングインターン
                  Ruby on Rails を用いたパフォーマンス・チューニングのプログラムに参加しました`,
  },
  {
    date: '2019/9',
    company: '株式会社オプティム',
    description: `短期インターン
                  セマンティック・セグメンテーションを用い、社内で取り組んでいるプロジェクトの精度向上に関する研究を行いました`,
  },
  {
    date: '2019/9',
    company: '日本経済新聞社',
    description: `HACK THE NIKKEI
                  日経電子版の記事データや閲覧履歴をデータ処理し、Web版での新たなサービスを提案し、実装しました`,
  },
]

const Career = () => {
  const classes = useStyles();
  
  return (
    <Container maxWidth="sm">
        <Box id="CAREER" mt={14}>
          &ensp; 
        </Box>
        <Box mt={6}>
        <Typography color="textPrimary" variant="h3" component="h1" gutterBottom>
          CAREER
        </Typography>
      </Box>
      <Timeline>
        {careers.map((career) => (
          <TimelineItem key={career.description}>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector />
              
            </TimelineSeparator>
            <TimelineContent>
              <Box mb={5}>
                <Typography color="textSecondary" variant="body1" component="h1" gutterBottom>
                  <Box className={classes.date}>
                    {career.date}
                  </Box>
                </Typography>
                <Typography color="textPrimary" variant="h6" component="h1" gutterBottom>
                  <Box fontWeight="fontWeightBold" className={classes.company}>
                    {career.company}
                  </Box>
                </Typography>
                <Typography color="textPrimary" variant="body2" component="h1" gutterBottom className={classes.description}>
                  <Box className={classes.description}>
                    {career.description}
                  </Box>
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  )
}

export default Career
