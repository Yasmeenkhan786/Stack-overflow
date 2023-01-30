import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {

    const tagsList = [{
      id:1,
      tagname:"javascript",
      tagDesc:"For questions regrading programming in ECAMScript (Javascript/JS) and its various dialects/implementaion.Please include all relevant tags on your questions"
    },
    {
      id:2,
      tagname:"python",
      tagDesc:"Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development."
    },
    {
      id:3,
      tagname:"c#",
      tagDesc:'C# is pronounced  "C-Sharp". It is an object-oriented programming language created by Microsoft that runs on the.NET Framework. C# has roots from the C family, and the language is close to other popular languages like C++ and Java.'
    },
    {
      id:4,
      tagname:"java",
      tagDesc:"Java is a high level, robust, object-oriented and secure programming language. Use this tags when you are having a problem using or understandong the langusge iteslef"
    },
    {
      id:5,
      tagname:"php",
      tagDesc:"PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.PHP is a widely-used, free, and efficient alternative to competitors such as Microsoft's ASP."
    },
    {
      id:6,
      tagname:"html",
      tagDesc:"HTML stands for Hyper Text Markup Language.It describes the structure of a Web pages and other in formation to be displayed on aweb browser"
    },
    {
      id:7,
      tagname:"android",
      tagDesc:"Android is a mobile operating system developed by Google. The Android operating system (OS) is based on the Linux kernel."
    },
    {
      id:8,
      tagname:"Css",
      tagDesc:"Cascading Style Sheets, fondly referred to as CSS, is a simply designed language intended to simplify the process of making web pages presentable. CSS allows you to apply styles to web pages."
    },
    {
      id:9,
      tagname:"ReactJs",
      tagDesc:"React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. "
    },
    {
      id:10,
      tagname:"node.js",
      tagDesc:"Node.js is a cross-platform, open-source server environment . Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript "
    },
  ]

  return (
    <div className='home-container-1'>
      <LeftSidebar/>
      <div className="home-container-2">
        <h1 className='tags-h1'>Tags</h1>
        <p className='tags-p'>A tag is a keyword or label that categories your question with other , similar questions</p>
        <p className='tags-p'>Using the right tag makes it easier for others to find and answer your question</p>
        <div className="tags-list-container">
          {
            tagsList.map((tag)=>(
              <TagsList tag={tag} key={tagsList.id}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Tags