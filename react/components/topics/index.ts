import { Topic } from '../../typings/custom'

import AutomaticCacheUpdates from './AutomaticCacheUpdates'
import ExtensionPoints from './ExtensionPoints'
import Internationalization from './Internationalization'
import DynamicPagination from './pagination/DynamicPagination'
import StaticPagination from './pagination/StaticPagination'
import PreviewWithCachedData from './PreviewWithCachedData'
import Styleguide from './Styleguide'

const topics: Topic[] = [
  {
    Component: Styleguide,
    name: 'Using VTEX Styleguide',
    slug: 'styleguide',
  },
  {
    Component: ExtensionPoints,
    name: 'Extension Points',
    slug: 'extension-points',
  },
  {
    Component: Internationalization,
    name: 'Internationalization',
    slug: 'internationalization',
  },
  {
    Component: PreviewWithCachedData,
    name: 'Preview with Cached Data',
    slug: 'preview-with-cached-data',
  },
  {
    Component: AutomaticCacheUpdates,
    name: 'Automatic Cache Updates',
    slug: 'automatic-cache-updates',
  },
  {
    Component: StaticPagination,
    name: 'Static Pagination',
    slug: 'static-pagination',
  },
  {
    Component: DynamicPagination,
    name: 'Dynamic Pagination',
    slug: 'dynamic-pagination',
  },
]

export default topics
