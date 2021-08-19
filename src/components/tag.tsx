import React, { FunctionComponent } from "react"

const greenLang = "bg-lime-light text-lime border-lime"
const redLang = "bg-ruby-light text-ruby border-ruby"
const blueLang = "bg-teal-light text-teal border-teal"
const pinkLang = "bg-pink-light text-pink border-pink"
const purpleLang = "bg-purple-light text-purple border-purple"
const yellowLang = "bg-yellow-light text-yellow-dark border-yellow-dark"

export type TagLang = {
  [key: string]: string
}

const langMap = {
  Javascript: greenLang,
  NodeJS: greenLang,
  Shopify: greenLang,
  VueJS: greenLang,
  Ruby: redLang,
  PHP: redLang,
  React: blueLang,
  Typescript: blueLang,
  Webpack: blueLang,
  Docker: blueLang,
  SCSS: pinkLang,
  AWS: yellowLang,
  "Gitlab CI/CD": yellowLang,
  Liquid: purpleLang,
}

type Props = {
  tagType: string
}

const Tag: FunctionComponent<Props> = ({ children, tagType }) => {
  let className =
    "md:mr-2 text-xs tracking-wide uppercase border-2 p-tag last:mr-0 rounded-md mb-2 sm:mb-0 sm:w-auto text-center md:text-left "
  if (langMap[tagType]) className += langMap[tagType]
  else className += blueLang

  return <span className={className}>{children}</span>
}

export default Tag
