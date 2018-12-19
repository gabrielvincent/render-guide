import { ServiceContext } from '@vtex/api'
import { BookDataSource } from './dataSources/bookDataSource'

declare global {
  interface Context extends ServiceContext {
    dataSources: DataSources
  }

  interface DataSources {
    database: BookDataSource
  }

  interface Book {
    id: string
    cacheId?: string
    name: string
    authors: string[]
  }

  interface BookInput {
    name: Book['name'],
    authors: Book['authors']
  }

  interface PageInfo {
    cursor: number
    hasNextPage: boolean
  }

  interface BookListwithPageInfo {
    content: Book[]
    pageinfo: PageInfo
  }

  type Maybe<T> = T | void
}

export {}
