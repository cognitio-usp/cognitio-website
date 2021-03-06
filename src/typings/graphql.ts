/* eslint-disable */
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
 **/
  Date: any,
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any,
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>,
  ne?: Maybe<Scalars['Boolean']>,
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};

export type Contact = {
  name: Scalars['String'],
  email: Scalars['String'],
};

export type ContactFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  email?: Maybe<StringQueryOperatorInput>,
};

export type ContactFilterListInput = {
  elemMatch?: Maybe<ContactFilterInput>,
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>,
  ne?: Maybe<Scalars['Date']>,
  gt?: Maybe<Scalars['Date']>,
  gte?: Maybe<Scalars['Date']>,
  lt?: Maybe<Scalars['Date']>,
  lte?: Maybe<Scalars['Date']>,
  in?: Maybe<Array<Maybe<Scalars['Date']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>,
};

export type Directory = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  sourceInstanceName?: Maybe<Scalars['String']>,
  absolutePath?: Maybe<Scalars['String']>,
  relativePath?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  prettySize?: Maybe<Scalars['String']>,
  modifiedTime?: Maybe<Scalars['Date']>,
  accessTime?: Maybe<Scalars['Date']>,
  changeTime?: Maybe<Scalars['Date']>,
  birthTime?: Maybe<Scalars['Date']>,
  root?: Maybe<Scalars['String']>,
  dir?: Maybe<Scalars['String']>,
  base?: Maybe<Scalars['String']>,
  ext?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  relativeDirectory?: Maybe<Scalars['String']>,
  dev?: Maybe<Scalars['Float']>,
  mode?: Maybe<Scalars['Int']>,
  nlink?: Maybe<Scalars['Int']>,
  uid?: Maybe<Scalars['Int']>,
  gid?: Maybe<Scalars['Int']>,
  rdev?: Maybe<Scalars['Int']>,
  ino?: Maybe<Scalars['Float']>,
  atimeMs?: Maybe<Scalars['Float']>,
  mtimeMs?: Maybe<Scalars['Float']>,
  ctimeMs?: Maybe<Scalars['Float']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  atime?: Maybe<Scalars['Date']>,
  mtime?: Maybe<Scalars['Date']>,
  ctime?: Maybe<Scalars['Date']>,
  birthtime?: Maybe<Scalars['Date']>,
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryBirthtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<DirectoryGroupConnection>,
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: DirectoryFieldsEnum
};

export type DirectoryEdge = {
  next?: Maybe<Directory>,
  node: Directory,
  previous?: Maybe<Directory>,
};

export enum DirectoryFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime'
}

export type DirectoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<FloatQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type DuotoneGradient = {
  highlight: Scalars['String'],
  shadow: Scalars['String'],
  opacity?: Maybe<Scalars['Int']>,
};

export type FeaturedLink = {
  label?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type FeaturedLinkFilterInput = {
  label?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
};

export type File = Node & {
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  sourceInstanceName?: Maybe<Scalars['String']>,
  absolutePath?: Maybe<Scalars['String']>,
  relativePath?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  prettySize?: Maybe<Scalars['String']>,
  modifiedTime?: Maybe<Scalars['Date']>,
  accessTime?: Maybe<Scalars['Date']>,
  changeTime?: Maybe<Scalars['Date']>,
  birthTime?: Maybe<Scalars['Date']>,
  root?: Maybe<Scalars['String']>,
  dir?: Maybe<Scalars['String']>,
  base?: Maybe<Scalars['String']>,
  ext?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  relativeDirectory?: Maybe<Scalars['String']>,
  dev?: Maybe<Scalars['Float']>,
  mode?: Maybe<Scalars['Int']>,
  nlink?: Maybe<Scalars['Int']>,
  uid?: Maybe<Scalars['Int']>,
  gid?: Maybe<Scalars['Int']>,
  rdev?: Maybe<Scalars['Int']>,
  ino?: Maybe<Scalars['Float']>,
  atimeMs?: Maybe<Scalars['Float']>,
  mtimeMs?: Maybe<Scalars['Float']>,
  ctimeMs?: Maybe<Scalars['Float']>,
  atime?: Maybe<Scalars['Date']>,
  mtime?: Maybe<Scalars['Date']>,
  ctime?: Maybe<Scalars['Date']>,
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  childImageSharp?: Maybe<ImageSharp>,
  childMarkdownRemark?: Maybe<MarkdownRemark>,
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type FileConnection = {
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<FileGroupConnection>,
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: FileFieldsEnum
};

export type FileEdge = {
  next?: Maybe<File>,
  node: File,
  previous?: Maybe<File>,
};

export enum FileFieldsEnum {
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  publicURL = 'publicURL',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  childImageSharp___id = 'childImageSharp___id',
  childImageSharp___fixed___base64 = 'childImageSharp___fixed___base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp___fixed___tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp___fixed___aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp___fixed___width',
  childImageSharp___fixed___height = 'childImageSharp___fixed___height',
  childImageSharp___fixed___src = 'childImageSharp___fixed___src',
  childImageSharp___fixed___srcSet = 'childImageSharp___fixed___srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp___fixed___srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp___fixed___originalName',
  childImageSharp___resolutions___base64 = 'childImageSharp___resolutions___base64',
  childImageSharp___resolutions___tracedSVG = 'childImageSharp___resolutions___tracedSVG',
  childImageSharp___resolutions___aspectRatio = 'childImageSharp___resolutions___aspectRatio',
  childImageSharp___resolutions___width = 'childImageSharp___resolutions___width',
  childImageSharp___resolutions___height = 'childImageSharp___resolutions___height',
  childImageSharp___resolutions___src = 'childImageSharp___resolutions___src',
  childImageSharp___resolutions___srcSet = 'childImageSharp___resolutions___srcSet',
  childImageSharp___resolutions___srcWebp = 'childImageSharp___resolutions___srcWebp',
  childImageSharp___resolutions___srcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  childImageSharp___resolutions___originalName = 'childImageSharp___resolutions___originalName',
  childImageSharp___fluid___base64 = 'childImageSharp___fluid___base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp___fluid___tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp___fluid___aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp___fluid___src',
  childImageSharp___fluid___srcSet = 'childImageSharp___fluid___srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp___fluid___srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp___fluid___sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp___fluid___originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp___fluid___originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp___fluid___presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp___fluid___presentationHeight',
  childImageSharp___sizes___base64 = 'childImageSharp___sizes___base64',
  childImageSharp___sizes___tracedSVG = 'childImageSharp___sizes___tracedSVG',
  childImageSharp___sizes___aspectRatio = 'childImageSharp___sizes___aspectRatio',
  childImageSharp___sizes___src = 'childImageSharp___sizes___src',
  childImageSharp___sizes___srcSet = 'childImageSharp___sizes___srcSet',
  childImageSharp___sizes___srcWebp = 'childImageSharp___sizes___srcWebp',
  childImageSharp___sizes___srcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  childImageSharp___sizes___sizes = 'childImageSharp___sizes___sizes',
  childImageSharp___sizes___originalImg = 'childImageSharp___sizes___originalImg',
  childImageSharp___sizes___originalName = 'childImageSharp___sizes___originalName',
  childImageSharp___sizes___presentationWidth = 'childImageSharp___sizes___presentationWidth',
  childImageSharp___sizes___presentationHeight = 'childImageSharp___sizes___presentationHeight',
  childImageSharp___original___width = 'childImageSharp___original___width',
  childImageSharp___original___height = 'childImageSharp___original___height',
  childImageSharp___original___src = 'childImageSharp___original___src',
  childImageSharp___resize___src = 'childImageSharp___resize___src',
  childImageSharp___resize___tracedSVG = 'childImageSharp___resize___tracedSVG',
  childImageSharp___resize___width = 'childImageSharp___resize___width',
  childImageSharp___resize___height = 'childImageSharp___resize___height',
  childImageSharp___resize___aspectRatio = 'childImageSharp___resize___aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp___resize___originalName',
  childImageSharp___parent___id = 'childImageSharp___parent___id',
  childImageSharp___parent___parent___id = 'childImageSharp___parent___parent___id',
  childImageSharp___parent___parent___children = 'childImageSharp___parent___parent___children',
  childImageSharp___parent___children = 'childImageSharp___parent___children',
  childImageSharp___parent___children___id = 'childImageSharp___parent___children___id',
  childImageSharp___parent___children___children = 'childImageSharp___parent___children___children',
  childImageSharp___parent___internal___content = 'childImageSharp___parent___internal___content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp___parent___internal___contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp___parent___internal___description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp___parent___internal___ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp___parent___internal___mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp___parent___internal___owner',
  childImageSharp___parent___internal___type = 'childImageSharp___parent___internal___type',
  childImageSharp___children = 'childImageSharp___children',
  childImageSharp___children___id = 'childImageSharp___children___id',
  childImageSharp___children___parent___id = 'childImageSharp___children___parent___id',
  childImageSharp___children___parent___children = 'childImageSharp___children___parent___children',
  childImageSharp___children___children = 'childImageSharp___children___children',
  childImageSharp___children___children___id = 'childImageSharp___children___children___id',
  childImageSharp___children___children___children = 'childImageSharp___children___children___children',
  childImageSharp___children___internal___content = 'childImageSharp___children___internal___content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp___children___internal___contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp___children___internal___description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp___children___internal___fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp___children___internal___ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp___children___internal___mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp___children___internal___owner',
  childImageSharp___children___internal___type = 'childImageSharp___children___internal___type',
  childImageSharp___internal___content = 'childImageSharp___internal___content',
  childImageSharp___internal___contentDigest = 'childImageSharp___internal___contentDigest',
  childImageSharp___internal___description = 'childImageSharp___internal___description',
  childImageSharp___internal___fieldOwners = 'childImageSharp___internal___fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp___internal___ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp___internal___mediaType',
  childImageSharp___internal___owner = 'childImageSharp___internal___owner',
  childImageSharp___internal___type = 'childImageSharp___internal___type',
  childMarkdownRemark___id = 'childMarkdownRemark___id',
  childMarkdownRemark___frontmatter___description = 'childMarkdownRemark___frontmatter___description',
  childMarkdownRemark___frontmatter___id = 'childMarkdownRemark___frontmatter___id',
  childMarkdownRemark___frontmatter___history = 'childMarkdownRemark___frontmatter___history',
  childMarkdownRemark___frontmatter___links = 'childMarkdownRemark___frontmatter___links',
  childMarkdownRemark___frontmatter___links___name = 'childMarkdownRemark___frontmatter___links___name',
  childMarkdownRemark___frontmatter___links___url = 'childMarkdownRemark___frontmatter___links___url',
  childMarkdownRemark___frontmatter___books = 'childMarkdownRemark___frontmatter___books',
  childMarkdownRemark___frontmatter___books___description = 'childMarkdownRemark___frontmatter___books___description',
  childMarkdownRemark___frontmatter___books___links = 'childMarkdownRemark___frontmatter___books___links',
  childMarkdownRemark___frontmatter___thesis = 'childMarkdownRemark___frontmatter___thesis',
  childMarkdownRemark___frontmatter___thesis___description = 'childMarkdownRemark___frontmatter___thesis___description',
  childMarkdownRemark___frontmatter___thesis___links = 'childMarkdownRemark___frontmatter___thesis___links',
  childMarkdownRemark___frontmatter___articles = 'childMarkdownRemark___frontmatter___articles',
  childMarkdownRemark___frontmatter___articles___description = 'childMarkdownRemark___frontmatter___articles___description',
  childMarkdownRemark___frontmatter___articles___links = 'childMarkdownRemark___frontmatter___articles___links',
  childMarkdownRemark___frontmatter___contacts = 'childMarkdownRemark___frontmatter___contacts',
  childMarkdownRemark___frontmatter___contacts___name = 'childMarkdownRemark___frontmatter___contacts___name',
  childMarkdownRemark___frontmatter___contacts___email = 'childMarkdownRemark___frontmatter___contacts___email',
  childMarkdownRemark___frontmatter___address1 = 'childMarkdownRemark___frontmatter___address1',
  childMarkdownRemark___frontmatter___address2 = 'childMarkdownRemark___frontmatter___address2',
  childMarkdownRemark___frontmatter___memberRole = 'childMarkdownRemark___frontmatter___memberRole',
  childMarkdownRemark___frontmatter___memberName = 'childMarkdownRemark___frontmatter___memberName',
  childMarkdownRemark___frontmatter___image___birthtime = 'childMarkdownRemark___frontmatter___image___birthtime',
  childMarkdownRemark___frontmatter___image___birthtimeMs = 'childMarkdownRemark___frontmatter___image___birthtimeMs',
  childMarkdownRemark___frontmatter___image___sourceInstanceName = 'childMarkdownRemark___frontmatter___image___sourceInstanceName',
  childMarkdownRemark___frontmatter___image___absolutePath = 'childMarkdownRemark___frontmatter___image___absolutePath',
  childMarkdownRemark___frontmatter___image___relativePath = 'childMarkdownRemark___frontmatter___image___relativePath',
  childMarkdownRemark___frontmatter___image___extension = 'childMarkdownRemark___frontmatter___image___extension',
  childMarkdownRemark___frontmatter___image___size = 'childMarkdownRemark___frontmatter___image___size',
  childMarkdownRemark___frontmatter___image___prettySize = 'childMarkdownRemark___frontmatter___image___prettySize',
  childMarkdownRemark___frontmatter___image___modifiedTime = 'childMarkdownRemark___frontmatter___image___modifiedTime',
  childMarkdownRemark___frontmatter___image___accessTime = 'childMarkdownRemark___frontmatter___image___accessTime',
  childMarkdownRemark___frontmatter___image___changeTime = 'childMarkdownRemark___frontmatter___image___changeTime',
  childMarkdownRemark___frontmatter___image___birthTime = 'childMarkdownRemark___frontmatter___image___birthTime',
  childMarkdownRemark___frontmatter___image___root = 'childMarkdownRemark___frontmatter___image___root',
  childMarkdownRemark___frontmatter___image___dir = 'childMarkdownRemark___frontmatter___image___dir',
  childMarkdownRemark___frontmatter___image___base = 'childMarkdownRemark___frontmatter___image___base',
  childMarkdownRemark___frontmatter___image___ext = 'childMarkdownRemark___frontmatter___image___ext',
  childMarkdownRemark___frontmatter___image___name = 'childMarkdownRemark___frontmatter___image___name',
  childMarkdownRemark___frontmatter___image___relativeDirectory = 'childMarkdownRemark___frontmatter___image___relativeDirectory',
  childMarkdownRemark___frontmatter___image___dev = 'childMarkdownRemark___frontmatter___image___dev',
  childMarkdownRemark___frontmatter___image___mode = 'childMarkdownRemark___frontmatter___image___mode',
  childMarkdownRemark___frontmatter___image___nlink = 'childMarkdownRemark___frontmatter___image___nlink',
  childMarkdownRemark___frontmatter___image___uid = 'childMarkdownRemark___frontmatter___image___uid',
  childMarkdownRemark___frontmatter___image___gid = 'childMarkdownRemark___frontmatter___image___gid',
  childMarkdownRemark___frontmatter___image___rdev = 'childMarkdownRemark___frontmatter___image___rdev',
  childMarkdownRemark___frontmatter___image___ino = 'childMarkdownRemark___frontmatter___image___ino',
  childMarkdownRemark___frontmatter___image___atimeMs = 'childMarkdownRemark___frontmatter___image___atimeMs',
  childMarkdownRemark___frontmatter___image___mtimeMs = 'childMarkdownRemark___frontmatter___image___mtimeMs',
  childMarkdownRemark___frontmatter___image___ctimeMs = 'childMarkdownRemark___frontmatter___image___ctimeMs',
  childMarkdownRemark___frontmatter___image___atime = 'childMarkdownRemark___frontmatter___image___atime',
  childMarkdownRemark___frontmatter___image___mtime = 'childMarkdownRemark___frontmatter___image___mtime',
  childMarkdownRemark___frontmatter___image___ctime = 'childMarkdownRemark___frontmatter___image___ctime',
  childMarkdownRemark___frontmatter___image___publicURL = 'childMarkdownRemark___frontmatter___image___publicURL',
  childMarkdownRemark___frontmatter___image___id = 'childMarkdownRemark___frontmatter___image___id',
  childMarkdownRemark___frontmatter___image___children = 'childMarkdownRemark___frontmatter___image___children',
  childMarkdownRemark___frontmatter___memberSince = 'childMarkdownRemark___frontmatter___memberSince',
  childMarkdownRemark___frontmatter___memberUntil = 'childMarkdownRemark___frontmatter___memberUntil',
  childMarkdownRemark___frontmatter___memberEmail = 'childMarkdownRemark___frontmatter___memberEmail',
  childMarkdownRemark___frontmatter___memberLattes = 'childMarkdownRemark___frontmatter___memberLattes',
  childMarkdownRemark___frontmatter___isFormerMember = 'childMarkdownRemark___frontmatter___isFormerMember',
  childMarkdownRemark___frontmatter___memberLinkedin = 'childMarkdownRemark___frontmatter___memberLinkedin',
  childMarkdownRemark___frontmatter___memberType = 'childMarkdownRemark___frontmatter___memberType',
  childMarkdownRemark___frontmatter___memberOtherInfos = 'childMarkdownRemark___frontmatter___memberOtherInfos',
  childMarkdownRemark___frontmatter___memberOtherInfos___info = 'childMarkdownRemark___frontmatter___memberOtherInfos___info',
  childMarkdownRemark___frontmatter___memberOtherInfos___link = 'childMarkdownRemark___frontmatter___memberOtherInfos___link',
  childMarkdownRemark___frontmatter___memberOtherInfos___label = 'childMarkdownRemark___frontmatter___memberOtherInfos___label',
  childMarkdownRemark___frontmatter___memberOtherInfos___url = 'childMarkdownRemark___frontmatter___memberOtherInfos___url',
  childMarkdownRemark___frontmatter___memberFeaturedLink___label = 'childMarkdownRemark___frontmatter___memberFeaturedLink___label',
  childMarkdownRemark___frontmatter___memberFeaturedLink___url = 'childMarkdownRemark___frontmatter___memberFeaturedLink___url',
  childMarkdownRemark___frontmatter___projectName = 'childMarkdownRemark___frontmatter___projectName',
  childMarkdownRemark___frontmatter___projectStart = 'childMarkdownRemark___frontmatter___projectStart',
  childMarkdownRemark___frontmatter___projectEnd = 'childMarkdownRemark___frontmatter___projectEnd',
  childMarkdownRemark___frontmatter___blogTitle = 'childMarkdownRemark___frontmatter___blogTitle',
  childMarkdownRemark___frontmatter___notListed = 'childMarkdownRemark___frontmatter___notListed',
  childMarkdownRemark___frontmatter___blogAuthor = 'childMarkdownRemark___frontmatter___blogAuthor',
  childMarkdownRemark___frontmatter___date = 'childMarkdownRemark___frontmatter___date',
  childMarkdownRemark___frontmatter___dateEnd = 'childMarkdownRemark___frontmatter___dateEnd',
  childMarkdownRemark___frontmatter___featured = 'childMarkdownRemark___frontmatter___featured',
  childMarkdownRemark___frontmatter___activitieTitle = 'childMarkdownRemark___frontmatter___activitieTitle',
  childMarkdownRemark___frontmatter___activitieType = 'childMarkdownRemark___frontmatter___activitieType',
  childMarkdownRemark___frontmatter___activitieLocation = 'childMarkdownRemark___frontmatter___activitieLocation',
  childMarkdownRemark___frontmatter___dateFormat = 'childMarkdownRemark___frontmatter___dateFormat',
  childMarkdownRemark___frontmatter___activitieLink___label = 'childMarkdownRemark___frontmatter___activitieLink___label',
  childMarkdownRemark___frontmatter___activitieLink___url = 'childMarkdownRemark___frontmatter___activitieLink___url',
  childMarkdownRemark___frontmatter___relatedProjects = 'childMarkdownRemark___frontmatter___relatedProjects',
  childMarkdownRemark___frontmatter___relatedProjects___id = 'childMarkdownRemark___frontmatter___relatedProjects___id',
  childMarkdownRemark___frontmatter___relatedProjects___excerpt = 'childMarkdownRemark___frontmatter___relatedProjects___excerpt',
  childMarkdownRemark___frontmatter___relatedProjects___rawMarkdownBody = 'childMarkdownRemark___frontmatter___relatedProjects___rawMarkdownBody',
  childMarkdownRemark___frontmatter___relatedProjects___fileAbsolutePath = 'childMarkdownRemark___frontmatter___relatedProjects___fileAbsolutePath',
  childMarkdownRemark___frontmatter___relatedProjects___html = 'childMarkdownRemark___frontmatter___relatedProjects___html',
  childMarkdownRemark___frontmatter___relatedProjects___htmlAst = 'childMarkdownRemark___frontmatter___relatedProjects___htmlAst',
  childMarkdownRemark___frontmatter___relatedProjects___excerptAst = 'childMarkdownRemark___frontmatter___relatedProjects___excerptAst',
  childMarkdownRemark___frontmatter___relatedProjects___headings = 'childMarkdownRemark___frontmatter___relatedProjects___headings',
  childMarkdownRemark___frontmatter___relatedProjects___timeToRead = 'childMarkdownRemark___frontmatter___relatedProjects___timeToRead',
  childMarkdownRemark___frontmatter___relatedProjects___tableOfContents = 'childMarkdownRemark___frontmatter___relatedProjects___tableOfContents',
  childMarkdownRemark___frontmatter___relatedProjects___children = 'childMarkdownRemark___frontmatter___relatedProjects___children',
  childMarkdownRemark___frontmatter___projectMembers = 'childMarkdownRemark___frontmatter___projectMembers',
  childMarkdownRemark___frontmatter___projectMembers___id = 'childMarkdownRemark___frontmatter___projectMembers___id',
  childMarkdownRemark___frontmatter___projectMembers___excerpt = 'childMarkdownRemark___frontmatter___projectMembers___excerpt',
  childMarkdownRemark___frontmatter___projectMembers___rawMarkdownBody = 'childMarkdownRemark___frontmatter___projectMembers___rawMarkdownBody',
  childMarkdownRemark___frontmatter___projectMembers___fileAbsolutePath = 'childMarkdownRemark___frontmatter___projectMembers___fileAbsolutePath',
  childMarkdownRemark___frontmatter___projectMembers___html = 'childMarkdownRemark___frontmatter___projectMembers___html',
  childMarkdownRemark___frontmatter___projectMembers___htmlAst = 'childMarkdownRemark___frontmatter___projectMembers___htmlAst',
  childMarkdownRemark___frontmatter___projectMembers___excerptAst = 'childMarkdownRemark___frontmatter___projectMembers___excerptAst',
  childMarkdownRemark___frontmatter___projectMembers___headings = 'childMarkdownRemark___frontmatter___projectMembers___headings',
  childMarkdownRemark___frontmatter___projectMembers___timeToRead = 'childMarkdownRemark___frontmatter___projectMembers___timeToRead',
  childMarkdownRemark___frontmatter___projectMembers___tableOfContents = 'childMarkdownRemark___frontmatter___projectMembers___tableOfContents',
  childMarkdownRemark___frontmatter___projectMembers___children = 'childMarkdownRemark___frontmatter___projectMembers___children',
  childMarkdownRemark___frontmatter___projectFormerMembers = 'childMarkdownRemark___frontmatter___projectFormerMembers',
  childMarkdownRemark___frontmatter___projectFormerMembers___id = 'childMarkdownRemark___frontmatter___projectFormerMembers___id',
  childMarkdownRemark___frontmatter___projectFormerMembers___excerpt = 'childMarkdownRemark___frontmatter___projectFormerMembers___excerpt',
  childMarkdownRemark___frontmatter___projectFormerMembers___rawMarkdownBody = 'childMarkdownRemark___frontmatter___projectFormerMembers___rawMarkdownBody',
  childMarkdownRemark___frontmatter___projectFormerMembers___fileAbsolutePath = 'childMarkdownRemark___frontmatter___projectFormerMembers___fileAbsolutePath',
  childMarkdownRemark___frontmatter___projectFormerMembers___html = 'childMarkdownRemark___frontmatter___projectFormerMembers___html',
  childMarkdownRemark___frontmatter___projectFormerMembers___htmlAst = 'childMarkdownRemark___frontmatter___projectFormerMembers___htmlAst',
  childMarkdownRemark___frontmatter___projectFormerMembers___excerptAst = 'childMarkdownRemark___frontmatter___projectFormerMembers___excerptAst',
  childMarkdownRemark___frontmatter___projectFormerMembers___headings = 'childMarkdownRemark___frontmatter___projectFormerMembers___headings',
  childMarkdownRemark___frontmatter___projectFormerMembers___timeToRead = 'childMarkdownRemark___frontmatter___projectFormerMembers___timeToRead',
  childMarkdownRemark___frontmatter___projectFormerMembers___tableOfContents = 'childMarkdownRemark___frontmatter___projectFormerMembers___tableOfContents',
  childMarkdownRemark___frontmatter___projectFormerMembers___children = 'childMarkdownRemark___frontmatter___projectFormerMembers___children',
  childMarkdownRemark___frontmatter___coordinators = 'childMarkdownRemark___frontmatter___coordinators',
  childMarkdownRemark___frontmatter___coordinators___id = 'childMarkdownRemark___frontmatter___coordinators___id',
  childMarkdownRemark___frontmatter___coordinators___excerpt = 'childMarkdownRemark___frontmatter___coordinators___excerpt',
  childMarkdownRemark___frontmatter___coordinators___rawMarkdownBody = 'childMarkdownRemark___frontmatter___coordinators___rawMarkdownBody',
  childMarkdownRemark___frontmatter___coordinators___fileAbsolutePath = 'childMarkdownRemark___frontmatter___coordinators___fileAbsolutePath',
  childMarkdownRemark___frontmatter___coordinators___html = 'childMarkdownRemark___frontmatter___coordinators___html',
  childMarkdownRemark___frontmatter___coordinators___htmlAst = 'childMarkdownRemark___frontmatter___coordinators___htmlAst',
  childMarkdownRemark___frontmatter___coordinators___excerptAst = 'childMarkdownRemark___frontmatter___coordinators___excerptAst',
  childMarkdownRemark___frontmatter___coordinators___headings = 'childMarkdownRemark___frontmatter___coordinators___headings',
  childMarkdownRemark___frontmatter___coordinators___timeToRead = 'childMarkdownRemark___frontmatter___coordinators___timeToRead',
  childMarkdownRemark___frontmatter___coordinators___tableOfContents = 'childMarkdownRemark___frontmatter___coordinators___tableOfContents',
  childMarkdownRemark___frontmatter___coordinators___children = 'childMarkdownRemark___frontmatter___coordinators___children',
  childMarkdownRemark___frontmatter___formerMembers = 'childMarkdownRemark___frontmatter___formerMembers',
  childMarkdownRemark___frontmatter___formerMembers___id = 'childMarkdownRemark___frontmatter___formerMembers___id',
  childMarkdownRemark___frontmatter___formerMembers___excerpt = 'childMarkdownRemark___frontmatter___formerMembers___excerpt',
  childMarkdownRemark___frontmatter___formerMembers___rawMarkdownBody = 'childMarkdownRemark___frontmatter___formerMembers___rawMarkdownBody',
  childMarkdownRemark___frontmatter___formerMembers___fileAbsolutePath = 'childMarkdownRemark___frontmatter___formerMembers___fileAbsolutePath',
  childMarkdownRemark___frontmatter___formerMembers___html = 'childMarkdownRemark___frontmatter___formerMembers___html',
  childMarkdownRemark___frontmatter___formerMembers___htmlAst = 'childMarkdownRemark___frontmatter___formerMembers___htmlAst',
  childMarkdownRemark___frontmatter___formerMembers___excerptAst = 'childMarkdownRemark___frontmatter___formerMembers___excerptAst',
  childMarkdownRemark___frontmatter___formerMembers___headings = 'childMarkdownRemark___frontmatter___formerMembers___headings',
  childMarkdownRemark___frontmatter___formerMembers___timeToRead = 'childMarkdownRemark___frontmatter___formerMembers___timeToRead',
  childMarkdownRemark___frontmatter___formerMembers___tableOfContents = 'childMarkdownRemark___frontmatter___formerMembers___tableOfContents',
  childMarkdownRemark___frontmatter___formerMembers___children = 'childMarkdownRemark___frontmatter___formerMembers___children',
  childMarkdownRemark___frontmatter___title = 'childMarkdownRemark___frontmatter___title',
  childMarkdownRemark___frontmatter___templateKey = 'childMarkdownRemark___frontmatter___templateKey',
  childMarkdownRemark___frontmatter___showHour = 'childMarkdownRemark___frontmatter___showHour',
  childMarkdownRemark___excerpt = 'childMarkdownRemark___excerpt',
  childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  childMarkdownRemark___fileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
  childMarkdownRemark___fields___readingTime___text = 'childMarkdownRemark___fields___readingTime___text',
  childMarkdownRemark___fields___readingTime___minutes = 'childMarkdownRemark___fields___readingTime___minutes',
  childMarkdownRemark___fields___readingTime___time = 'childMarkdownRemark___fields___readingTime___time',
  childMarkdownRemark___fields___readingTime___words = 'childMarkdownRemark___fields___readingTime___words',
  childMarkdownRemark___fields___slug = 'childMarkdownRemark___fields___slug',
  childMarkdownRemark___html = 'childMarkdownRemark___html',
  childMarkdownRemark___htmlAst = 'childMarkdownRemark___htmlAst',
  childMarkdownRemark___excerptAst = 'childMarkdownRemark___excerptAst',
  childMarkdownRemark___headings = 'childMarkdownRemark___headings',
  childMarkdownRemark___headings___value = 'childMarkdownRemark___headings___value',
  childMarkdownRemark___headings___depth = 'childMarkdownRemark___headings___depth',
  childMarkdownRemark___timeToRead = 'childMarkdownRemark___timeToRead',
  childMarkdownRemark___tableOfContents = 'childMarkdownRemark___tableOfContents',
  childMarkdownRemark___wordCount___paragraphs = 'childMarkdownRemark___wordCount___paragraphs',
  childMarkdownRemark___wordCount___sentences = 'childMarkdownRemark___wordCount___sentences',
  childMarkdownRemark___wordCount___words = 'childMarkdownRemark___wordCount___words',
  childMarkdownRemark___parent___id = 'childMarkdownRemark___parent___id',
  childMarkdownRemark___parent___parent___id = 'childMarkdownRemark___parent___parent___id',
  childMarkdownRemark___parent___parent___children = 'childMarkdownRemark___parent___parent___children',
  childMarkdownRemark___parent___children = 'childMarkdownRemark___parent___children',
  childMarkdownRemark___parent___children___id = 'childMarkdownRemark___parent___children___id',
  childMarkdownRemark___parent___children___children = 'childMarkdownRemark___parent___children___children',
  childMarkdownRemark___parent___internal___content = 'childMarkdownRemark___parent___internal___content',
  childMarkdownRemark___parent___internal___contentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  childMarkdownRemark___parent___internal___description = 'childMarkdownRemark___parent___internal___description',
  childMarkdownRemark___parent___internal___fieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  childMarkdownRemark___parent___internal___ignoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  childMarkdownRemark___parent___internal___mediaType = 'childMarkdownRemark___parent___internal___mediaType',
  childMarkdownRemark___parent___internal___owner = 'childMarkdownRemark___parent___internal___owner',
  childMarkdownRemark___parent___internal___type = 'childMarkdownRemark___parent___internal___type',
  childMarkdownRemark___children = 'childMarkdownRemark___children',
  childMarkdownRemark___children___id = 'childMarkdownRemark___children___id',
  childMarkdownRemark___children___parent___id = 'childMarkdownRemark___children___parent___id',
  childMarkdownRemark___children___parent___children = 'childMarkdownRemark___children___parent___children',
  childMarkdownRemark___children___children = 'childMarkdownRemark___children___children',
  childMarkdownRemark___children___children___id = 'childMarkdownRemark___children___children___id',
  childMarkdownRemark___children___children___children = 'childMarkdownRemark___children___children___children',
  childMarkdownRemark___children___internal___content = 'childMarkdownRemark___children___internal___content',
  childMarkdownRemark___children___internal___contentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  childMarkdownRemark___children___internal___description = 'childMarkdownRemark___children___internal___description',
  childMarkdownRemark___children___internal___fieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  childMarkdownRemark___children___internal___ignoreType = 'childMarkdownRemark___children___internal___ignoreType',
  childMarkdownRemark___children___internal___mediaType = 'childMarkdownRemark___children___internal___mediaType',
  childMarkdownRemark___children___internal___owner = 'childMarkdownRemark___children___internal___owner',
  childMarkdownRemark___children___internal___type = 'childMarkdownRemark___children___internal___type',
  childMarkdownRemark___internal___content = 'childMarkdownRemark___internal___content',
  childMarkdownRemark___internal___contentDigest = 'childMarkdownRemark___internal___contentDigest',
  childMarkdownRemark___internal___description = 'childMarkdownRemark___internal___description',
  childMarkdownRemark___internal___fieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  childMarkdownRemark___internal___ignoreType = 'childMarkdownRemark___internal___ignoreType',
  childMarkdownRemark___internal___mediaType = 'childMarkdownRemark___internal___mediaType',
  childMarkdownRemark___internal___owner = 'childMarkdownRemark___internal___owner',
  childMarkdownRemark___internal___type = 'childMarkdownRemark___internal___type'
}

export type FileFilterInput = {
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<FloatQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>,
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type Frontmatter = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  history?: Maybe<Scalars['String']>,
  links?: Maybe<Array<Links>>,
  books?: Maybe<Array<ResearchCard>>,
  thesis?: Maybe<Array<ResearchCard>>,
  articles?: Maybe<Array<ResearchCard>>,
  contacts?: Maybe<Array<Contact>>,
  address1?: Maybe<Scalars['String']>,
  address2?: Maybe<Scalars['String']>,
  memberRole?: Maybe<Scalars['String']>,
  memberName?: Maybe<Scalars['String']>,
  image?: Maybe<File>,
  memberSince?: Maybe<Scalars['Date']>,
  memberUntil?: Maybe<Scalars['Date']>,
  memberEmail?: Maybe<Scalars['String']>,
  memberLattes?: Maybe<Scalars['String']>,
  isFormerMember?: Maybe<Scalars['Boolean']>,
  memberLinkedin?: Maybe<Scalars['String']>,
  memberType?: Maybe<Scalars['Int']>,
  memberOtherInfos?: Maybe<Array<OtherInfos>>,
  memberFeaturedLink?: Maybe<FeaturedLink>,
  projectName?: Maybe<Scalars['String']>,
  projectStart?: Maybe<Scalars['Date']>,
  projectEnd?: Maybe<Scalars['Date']>,
  blogTitle?: Maybe<Scalars['String']>,
  notListed?: Maybe<Scalars['Boolean']>,
  blogAuthor?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>,
  dateEnd?: Maybe<Scalars['Date']>,
  featured?: Maybe<Scalars['String']>,
  activitieTitle?: Maybe<Scalars['String']>,
  activitieType?: Maybe<Scalars['String']>,
  activitieLocation?: Maybe<Scalars['String']>,
  dateFormat?: Maybe<Scalars['Int']>,
  activitieLink?: Maybe<FeaturedLink>,
  relatedProjects?: Maybe<Array<Maybe<MarkdownRemark>>>,
  projectMembers?: Maybe<Array<Maybe<MarkdownRemark>>>,
  projectFormerMembers?: Maybe<Array<Maybe<MarkdownRemark>>>,
  coordinators?: Maybe<Array<Maybe<MarkdownRemark>>>,
  formerMembers?: Maybe<Array<Maybe<MarkdownRemark>>>,
  title?: Maybe<Scalars['String']>,
  templateKey?: Maybe<Scalars['String']>,
  showHour?: Maybe<Scalars['Boolean']>,
};


export type FrontmatterMemberSinceArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FrontmatterMemberUntilArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FrontmatterProjectStartArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FrontmatterProjectEndArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FrontmatterDateEndArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type FrontmatterFilterInput = {
  description?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  history?: Maybe<StringQueryOperatorInput>,
  links?: Maybe<LinksFilterListInput>,
  books?: Maybe<ResearchCardFilterListInput>,
  thesis?: Maybe<ResearchCardFilterListInput>,
  articles?: Maybe<ResearchCardFilterListInput>,
  contacts?: Maybe<ContactFilterListInput>,
  address1?: Maybe<StringQueryOperatorInput>,
  address2?: Maybe<StringQueryOperatorInput>,
  memberRole?: Maybe<StringQueryOperatorInput>,
  memberName?: Maybe<StringQueryOperatorInput>,
  image?: Maybe<FileFilterInput>,
  memberSince?: Maybe<DateQueryOperatorInput>,
  memberUntil?: Maybe<DateQueryOperatorInput>,
  memberEmail?: Maybe<StringQueryOperatorInput>,
  memberLattes?: Maybe<StringQueryOperatorInput>,
  isFormerMember?: Maybe<BooleanQueryOperatorInput>,
  memberLinkedin?: Maybe<StringQueryOperatorInput>,
  memberType?: Maybe<IntQueryOperatorInput>,
  memberOtherInfos?: Maybe<OtherInfosFilterListInput>,
  memberFeaturedLink?: Maybe<FeaturedLinkFilterInput>,
  projectName?: Maybe<StringQueryOperatorInput>,
  projectStart?: Maybe<DateQueryOperatorInput>,
  projectEnd?: Maybe<DateQueryOperatorInput>,
  blogTitle?: Maybe<StringQueryOperatorInput>,
  notListed?: Maybe<BooleanQueryOperatorInput>,
  blogAuthor?: Maybe<StringQueryOperatorInput>,
  date?: Maybe<DateQueryOperatorInput>,
  dateEnd?: Maybe<DateQueryOperatorInput>,
  featured?: Maybe<StringQueryOperatorInput>,
  activitieTitle?: Maybe<StringQueryOperatorInput>,
  activitieType?: Maybe<StringQueryOperatorInput>,
  activitieLocation?: Maybe<StringQueryOperatorInput>,
  dateFormat?: Maybe<IntQueryOperatorInput>,
  activitieLink?: Maybe<FeaturedLinkFilterInput>,
  relatedProjects?: Maybe<MarkdownRemarkFilterListInput>,
  projectMembers?: Maybe<MarkdownRemarkFilterListInput>,
  projectFormerMembers?: Maybe<MarkdownRemarkFilterListInput>,
  coordinators?: Maybe<MarkdownRemarkFilterListInput>,
  formerMembers?: Maybe<MarkdownRemarkFilterListInput>,
  title?: Maybe<StringQueryOperatorInput>,
  templateKey?: Maybe<StringQueryOperatorInput>,
  showHour?: Maybe<BooleanQueryOperatorInput>,
};

export enum ImageCropFocus {
  CENTER = 'CENTER',
  NORTH = 'NORTH',
  NORTHEAST = 'NORTHEAST',
  EAST = 'EAST',
  SOUTHEAST = 'SOUTHEAST',
  SOUTH = 'SOUTH',
  SOUTHWEST = 'SOUTHWEST',
  WEST = 'WEST',
  NORTHWEST = 'NORTHWEST',
  ENTROPY = 'ENTROPY',
  ATTENTION = 'ATTENTION'
}

export enum ImageFit {
  COVER = 'COVER',
  CONTAIN = 'CONTAIN',
  FILL = 'FILL'
}

export enum ImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP'
}

export type ImageSharp = Node & {
  id: Scalars['ID'],
  fixed?: Maybe<ImageSharpFixed>,
  resolutions?: Maybe<ImageSharpResolutions>,
  fluid?: Maybe<ImageSharpFluid>,
  sizes?: Maybe<ImageSharpSizes>,
  original?: Maybe<ImageSharpOriginal>,
  resize?: Maybe<ImageSharpResize>,
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionLevel?: Maybe<Scalars['Int']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  base64?: Maybe<Scalars['Boolean']>,
  traceSVG?: Maybe<Potrace>,
  toFormat?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ImageSharpGroupConnection>,
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ImageSharpFieldsEnum
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>,
  node: ImageSharp,
  previous?: Maybe<ImageSharp>,
};

export enum ImageSharpFieldsEnum {
  id = 'id',
  fixed___base64 = 'fixed___base64',
  fixed___tracedSVG = 'fixed___tracedSVG',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___width = 'fixed___width',
  fixed___height = 'fixed___height',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  fixed___originalName = 'fixed___originalName',
  resolutions___base64 = 'resolutions___base64',
  resolutions___tracedSVG = 'resolutions___tracedSVG',
  resolutions___aspectRatio = 'resolutions___aspectRatio',
  resolutions___width = 'resolutions___width',
  resolutions___height = 'resolutions___height',
  resolutions___src = 'resolutions___src',
  resolutions___srcSet = 'resolutions___srcSet',
  resolutions___srcWebp = 'resolutions___srcWebp',
  resolutions___srcSetWebp = 'resolutions___srcSetWebp',
  resolutions___originalName = 'resolutions___originalName',
  fluid___base64 = 'fluid___base64',
  fluid___tracedSVG = 'fluid___tracedSVG',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___sizes = 'fluid___sizes',
  fluid___originalImg = 'fluid___originalImg',
  fluid___originalName = 'fluid___originalName',
  fluid___presentationWidth = 'fluid___presentationWidth',
  fluid___presentationHeight = 'fluid___presentationHeight',
  sizes___base64 = 'sizes___base64',
  sizes___tracedSVG = 'sizes___tracedSVG',
  sizes___aspectRatio = 'sizes___aspectRatio',
  sizes___src = 'sizes___src',
  sizes___srcSet = 'sizes___srcSet',
  sizes___srcWebp = 'sizes___srcWebp',
  sizes___srcSetWebp = 'sizes___srcSetWebp',
  sizes___sizes = 'sizes___sizes',
  sizes___originalImg = 'sizes___originalImg',
  sizes___originalName = 'sizes___originalName',
  sizes___presentationWidth = 'sizes___presentationWidth',
  sizes___presentationHeight = 'sizes___presentationHeight',
  original___width = 'original___width',
  original___height = 'original___height',
  original___src = 'original___src',
  resize___src = 'resize___src',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___width = 'resize___width',
  resize___height = 'resize___height',
  resize___aspectRatio = 'resize___aspectRatio',
  resize___originalName = 'resize___originalName',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ImageSharpFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  width?: Maybe<IntQueryOperatorInput>,
  height?: Maybe<IntQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Internal = {
  content?: Maybe<Scalars['String']>,
  contentDigest: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>,
  ignoreType?: Maybe<Scalars['Boolean']>,
  mediaType?: Maybe<Scalars['String']>,
  owner: Scalars['String'],
  type: Scalars['String'],
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>,
  contentDigest?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  fieldOwners?: Maybe<StringQueryOperatorInput>,
  ignoreType?: Maybe<BooleanQueryOperatorInput>,
  mediaType?: Maybe<StringQueryOperatorInput>,
  owner?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>,
  ne?: Maybe<Scalars['JSON']>,
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  regex?: Maybe<Scalars['JSON']>,
  glob?: Maybe<Scalars['JSON']>,
};

export type Links = {
  name: Scalars['String'],
  url: Scalars['String'],
};

export type LinksFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
};

export type LinksFilterListInput = {
  elemMatch?: Maybe<LinksFilterInput>,
};

export enum MarkdownExcerptFormats {
  PLAIN = 'PLAIN',
  HTML = 'HTML',
  MARKDOWN = 'MARKDOWN'
}

export type MarkdownHeading = {
  value?: Maybe<Scalars['String']>,
  depth?: Maybe<Scalars['Int']>,
};

export type MarkdownHeadingFilterInput = {
  value?: Maybe<StringQueryOperatorInput>,
  depth?: Maybe<IntQueryOperatorInput>,
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>,
};

export enum MarkdownHeadingLevels {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6'
}

export type MarkdownRemark = Node & {
  id: Scalars['ID'],
  frontmatter?: Maybe<Frontmatter>,
  excerpt?: Maybe<Scalars['String']>,
  rawMarkdownBody?: Maybe<Scalars['String']>,
  fileAbsolutePath?: Maybe<Scalars['String']>,
  fields?: Maybe<MarkdownRemarkFields>,
  html?: Maybe<Scalars['String']>,
  htmlAst?: Maybe<Scalars['JSON']>,
  excerptAst?: Maybe<Scalars['JSON']>,
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>,
  timeToRead?: Maybe<Scalars['Int']>,
  tableOfContents?: Maybe<Scalars['String']>,
  wordCount?: Maybe<MarkdownWordCount>,
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>,
  truncate?: Maybe<Scalars['Boolean']>,
  format?: Maybe<MarkdownExcerptFormats>
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>,
  truncate?: Maybe<Scalars['Boolean']>
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>
};


export type MarkdownRemarkTableOfContentsArgs = {
  pathToSlugField?: Maybe<Scalars['String']>,
  maxDepth?: Maybe<Scalars['Int']>,
  heading?: Maybe<Scalars['String']>
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'],
  edges: Array<MarkdownRemarkEdge>,
  nodes: Array<MarkdownRemark>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<MarkdownRemarkGroupConnection>,
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: MarkdownRemarkFieldsEnum
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>,
  node: MarkdownRemark,
  previous?: Maybe<MarkdownRemark>,
};

export type MarkdownRemarkFields = {
  readingTime?: Maybe<MarkdownRemarkFieldsReadingTime>,
  slug?: Maybe<Scalars['String']>,
};

export enum MarkdownRemarkFieldsEnum {
  id = 'id',
  frontmatter___description = 'frontmatter___description',
  frontmatter___id = 'frontmatter___id',
  frontmatter___history = 'frontmatter___history',
  frontmatter___links = 'frontmatter___links',
  frontmatter___links___name = 'frontmatter___links___name',
  frontmatter___links___url = 'frontmatter___links___url',
  frontmatter___books = 'frontmatter___books',
  frontmatter___books___description = 'frontmatter___books___description',
  frontmatter___books___links = 'frontmatter___books___links',
  frontmatter___books___links___name = 'frontmatter___books___links___name',
  frontmatter___books___links___url = 'frontmatter___books___links___url',
  frontmatter___thesis = 'frontmatter___thesis',
  frontmatter___thesis___description = 'frontmatter___thesis___description',
  frontmatter___thesis___links = 'frontmatter___thesis___links',
  frontmatter___thesis___links___name = 'frontmatter___thesis___links___name',
  frontmatter___thesis___links___url = 'frontmatter___thesis___links___url',
  frontmatter___articles = 'frontmatter___articles',
  frontmatter___articles___description = 'frontmatter___articles___description',
  frontmatter___articles___links = 'frontmatter___articles___links',
  frontmatter___articles___links___name = 'frontmatter___articles___links___name',
  frontmatter___articles___links___url = 'frontmatter___articles___links___url',
  frontmatter___contacts = 'frontmatter___contacts',
  frontmatter___contacts___name = 'frontmatter___contacts___name',
  frontmatter___contacts___email = 'frontmatter___contacts___email',
  frontmatter___address1 = 'frontmatter___address1',
  frontmatter___address2 = 'frontmatter___address2',
  frontmatter___memberRole = 'frontmatter___memberRole',
  frontmatter___memberName = 'frontmatter___memberName',
  frontmatter___image___birthtime = 'frontmatter___image___birthtime',
  frontmatter___image___birthtimeMs = 'frontmatter___image___birthtimeMs',
  frontmatter___image___sourceInstanceName = 'frontmatter___image___sourceInstanceName',
  frontmatter___image___absolutePath = 'frontmatter___image___absolutePath',
  frontmatter___image___relativePath = 'frontmatter___image___relativePath',
  frontmatter___image___extension = 'frontmatter___image___extension',
  frontmatter___image___size = 'frontmatter___image___size',
  frontmatter___image___prettySize = 'frontmatter___image___prettySize',
  frontmatter___image___modifiedTime = 'frontmatter___image___modifiedTime',
  frontmatter___image___accessTime = 'frontmatter___image___accessTime',
  frontmatter___image___changeTime = 'frontmatter___image___changeTime',
  frontmatter___image___birthTime = 'frontmatter___image___birthTime',
  frontmatter___image___root = 'frontmatter___image___root',
  frontmatter___image___dir = 'frontmatter___image___dir',
  frontmatter___image___base = 'frontmatter___image___base',
  frontmatter___image___ext = 'frontmatter___image___ext',
  frontmatter___image___name = 'frontmatter___image___name',
  frontmatter___image___relativeDirectory = 'frontmatter___image___relativeDirectory',
  frontmatter___image___dev = 'frontmatter___image___dev',
  frontmatter___image___mode = 'frontmatter___image___mode',
  frontmatter___image___nlink = 'frontmatter___image___nlink',
  frontmatter___image___uid = 'frontmatter___image___uid',
  frontmatter___image___gid = 'frontmatter___image___gid',
  frontmatter___image___rdev = 'frontmatter___image___rdev',
  frontmatter___image___ino = 'frontmatter___image___ino',
  frontmatter___image___atimeMs = 'frontmatter___image___atimeMs',
  frontmatter___image___mtimeMs = 'frontmatter___image___mtimeMs',
  frontmatter___image___ctimeMs = 'frontmatter___image___ctimeMs',
  frontmatter___image___atime = 'frontmatter___image___atime',
  frontmatter___image___mtime = 'frontmatter___image___mtime',
  frontmatter___image___ctime = 'frontmatter___image___ctime',
  frontmatter___image___publicURL = 'frontmatter___image___publicURL',
  frontmatter___image___id = 'frontmatter___image___id',
  frontmatter___image___parent___id = 'frontmatter___image___parent___id',
  frontmatter___image___parent___children = 'frontmatter___image___parent___children',
  frontmatter___image___children = 'frontmatter___image___children',
  frontmatter___image___children___id = 'frontmatter___image___children___id',
  frontmatter___image___children___children = 'frontmatter___image___children___children',
  frontmatter___image___internal___content = 'frontmatter___image___internal___content',
  frontmatter___image___internal___contentDigest = 'frontmatter___image___internal___contentDigest',
  frontmatter___image___internal___description = 'frontmatter___image___internal___description',
  frontmatter___image___internal___fieldOwners = 'frontmatter___image___internal___fieldOwners',
  frontmatter___image___internal___ignoreType = 'frontmatter___image___internal___ignoreType',
  frontmatter___image___internal___mediaType = 'frontmatter___image___internal___mediaType',
  frontmatter___image___internal___owner = 'frontmatter___image___internal___owner',
  frontmatter___image___internal___type = 'frontmatter___image___internal___type',
  frontmatter___image___childImageSharp___id = 'frontmatter___image___childImageSharp___id',
  frontmatter___image___childImageSharp___children = 'frontmatter___image___childImageSharp___children',
  frontmatter___image___childMarkdownRemark___id = 'frontmatter___image___childMarkdownRemark___id',
  frontmatter___image___childMarkdownRemark___excerpt = 'frontmatter___image___childMarkdownRemark___excerpt',
  frontmatter___image___childMarkdownRemark___rawMarkdownBody = 'frontmatter___image___childMarkdownRemark___rawMarkdownBody',
  frontmatter___image___childMarkdownRemark___fileAbsolutePath = 'frontmatter___image___childMarkdownRemark___fileAbsolutePath',
  frontmatter___image___childMarkdownRemark___html = 'frontmatter___image___childMarkdownRemark___html',
  frontmatter___image___childMarkdownRemark___htmlAst = 'frontmatter___image___childMarkdownRemark___htmlAst',
  frontmatter___image___childMarkdownRemark___excerptAst = 'frontmatter___image___childMarkdownRemark___excerptAst',
  frontmatter___image___childMarkdownRemark___headings = 'frontmatter___image___childMarkdownRemark___headings',
  frontmatter___image___childMarkdownRemark___timeToRead = 'frontmatter___image___childMarkdownRemark___timeToRead',
  frontmatter___image___childMarkdownRemark___tableOfContents = 'frontmatter___image___childMarkdownRemark___tableOfContents',
  frontmatter___image___childMarkdownRemark___children = 'frontmatter___image___childMarkdownRemark___children',
  frontmatter___memberSince = 'frontmatter___memberSince',
  frontmatter___memberUntil = 'frontmatter___memberUntil',
  frontmatter___memberEmail = 'frontmatter___memberEmail',
  frontmatter___memberLattes = 'frontmatter___memberLattes',
  frontmatter___isFormerMember = 'frontmatter___isFormerMember',
  frontmatter___memberLinkedin = 'frontmatter___memberLinkedin',
  frontmatter___memberType = 'frontmatter___memberType',
  frontmatter___memberOtherInfos = 'frontmatter___memberOtherInfos',
  frontmatter___memberOtherInfos___info = 'frontmatter___memberOtherInfos___info',
  frontmatter___memberOtherInfos___link = 'frontmatter___memberOtherInfos___link',
  frontmatter___memberOtherInfos___label = 'frontmatter___memberOtherInfos___label',
  frontmatter___memberOtherInfos___url = 'frontmatter___memberOtherInfos___url',
  frontmatter___memberFeaturedLink___label = 'frontmatter___memberFeaturedLink___label',
  frontmatter___memberFeaturedLink___url = 'frontmatter___memberFeaturedLink___url',
  frontmatter___projectName = 'frontmatter___projectName',
  frontmatter___projectStart = 'frontmatter___projectStart',
  frontmatter___projectEnd = 'frontmatter___projectEnd',
  frontmatter___blogTitle = 'frontmatter___blogTitle',
  frontmatter___notListed = 'frontmatter___notListed',
  frontmatter___blogAuthor = 'frontmatter___blogAuthor',
  frontmatter___date = 'frontmatter___date',
  frontmatter___dateEnd = 'frontmatter___dateEnd',
  frontmatter___featured = 'frontmatter___featured',
  frontmatter___activitieTitle = 'frontmatter___activitieTitle',
  frontmatter___activitieType = 'frontmatter___activitieType',
  frontmatter___activitieLocation = 'frontmatter___activitieLocation',
  frontmatter___dateFormat = 'frontmatter___dateFormat',
  frontmatter___activitieLink___label = 'frontmatter___activitieLink___label',
  frontmatter___activitieLink___url = 'frontmatter___activitieLink___url',
  frontmatter___relatedProjects = 'frontmatter___relatedProjects',
  frontmatter___relatedProjects___id = 'frontmatter___relatedProjects___id',
  frontmatter___relatedProjects___frontmatter___description = 'frontmatter___relatedProjects___frontmatter___description',
  frontmatter___relatedProjects___frontmatter___id = 'frontmatter___relatedProjects___frontmatter___id',
  frontmatter___relatedProjects___frontmatter___history = 'frontmatter___relatedProjects___frontmatter___history',
  frontmatter___relatedProjects___frontmatter___links = 'frontmatter___relatedProjects___frontmatter___links',
  frontmatter___relatedProjects___frontmatter___books = 'frontmatter___relatedProjects___frontmatter___books',
  frontmatter___relatedProjects___frontmatter___thesis = 'frontmatter___relatedProjects___frontmatter___thesis',
  frontmatter___relatedProjects___frontmatter___articles = 'frontmatter___relatedProjects___frontmatter___articles',
  frontmatter___relatedProjects___frontmatter___contacts = 'frontmatter___relatedProjects___frontmatter___contacts',
  frontmatter___relatedProjects___frontmatter___address1 = 'frontmatter___relatedProjects___frontmatter___address1',
  frontmatter___relatedProjects___frontmatter___address2 = 'frontmatter___relatedProjects___frontmatter___address2',
  frontmatter___relatedProjects___frontmatter___memberRole = 'frontmatter___relatedProjects___frontmatter___memberRole',
  frontmatter___relatedProjects___frontmatter___memberName = 'frontmatter___relatedProjects___frontmatter___memberName',
  frontmatter___relatedProjects___frontmatter___memberSince = 'frontmatter___relatedProjects___frontmatter___memberSince',
  frontmatter___relatedProjects___frontmatter___memberUntil = 'frontmatter___relatedProjects___frontmatter___memberUntil',
  frontmatter___relatedProjects___frontmatter___memberEmail = 'frontmatter___relatedProjects___frontmatter___memberEmail',
  frontmatter___relatedProjects___frontmatter___memberLattes = 'frontmatter___relatedProjects___frontmatter___memberLattes',
  frontmatter___relatedProjects___frontmatter___isFormerMember = 'frontmatter___relatedProjects___frontmatter___isFormerMember',
  frontmatter___relatedProjects___frontmatter___memberLinkedin = 'frontmatter___relatedProjects___frontmatter___memberLinkedin',
  frontmatter___relatedProjects___frontmatter___memberType = 'frontmatter___relatedProjects___frontmatter___memberType',
  frontmatter___relatedProjects___frontmatter___memberOtherInfos = 'frontmatter___relatedProjects___frontmatter___memberOtherInfos',
  frontmatter___relatedProjects___frontmatter___projectName = 'frontmatter___relatedProjects___frontmatter___projectName',
  frontmatter___relatedProjects___frontmatter___projectStart = 'frontmatter___relatedProjects___frontmatter___projectStart',
  frontmatter___relatedProjects___frontmatter___projectEnd = 'frontmatter___relatedProjects___frontmatter___projectEnd',
  frontmatter___relatedProjects___frontmatter___blogTitle = 'frontmatter___relatedProjects___frontmatter___blogTitle',
  frontmatter___relatedProjects___frontmatter___notListed = 'frontmatter___relatedProjects___frontmatter___notListed',
  frontmatter___relatedProjects___frontmatter___blogAuthor = 'frontmatter___relatedProjects___frontmatter___blogAuthor',
  frontmatter___relatedProjects___frontmatter___date = 'frontmatter___relatedProjects___frontmatter___date',
  frontmatter___relatedProjects___frontmatter___dateEnd = 'frontmatter___relatedProjects___frontmatter___dateEnd',
  frontmatter___relatedProjects___frontmatter___featured = 'frontmatter___relatedProjects___frontmatter___featured',
  frontmatter___relatedProjects___frontmatter___activitieTitle = 'frontmatter___relatedProjects___frontmatter___activitieTitle',
  frontmatter___relatedProjects___frontmatter___activitieType = 'frontmatter___relatedProjects___frontmatter___activitieType',
  frontmatter___relatedProjects___frontmatter___activitieLocation = 'frontmatter___relatedProjects___frontmatter___activitieLocation',
  frontmatter___relatedProjects___frontmatter___dateFormat = 'frontmatter___relatedProjects___frontmatter___dateFormat',
  frontmatter___relatedProjects___frontmatter___relatedProjects = 'frontmatter___relatedProjects___frontmatter___relatedProjects',
  frontmatter___relatedProjects___frontmatter___projectMembers = 'frontmatter___relatedProjects___frontmatter___projectMembers',
  frontmatter___relatedProjects___frontmatter___projectFormerMembers = 'frontmatter___relatedProjects___frontmatter___projectFormerMembers',
  frontmatter___relatedProjects___frontmatter___coordinators = 'frontmatter___relatedProjects___frontmatter___coordinators',
  frontmatter___relatedProjects___frontmatter___formerMembers = 'frontmatter___relatedProjects___frontmatter___formerMembers',
  frontmatter___relatedProjects___frontmatter___title = 'frontmatter___relatedProjects___frontmatter___title',
  frontmatter___relatedProjects___frontmatter___templateKey = 'frontmatter___relatedProjects___frontmatter___templateKey',
  frontmatter___relatedProjects___frontmatter___showHour = 'frontmatter___relatedProjects___frontmatter___showHour',
  frontmatter___relatedProjects___excerpt = 'frontmatter___relatedProjects___excerpt',
  frontmatter___relatedProjects___rawMarkdownBody = 'frontmatter___relatedProjects___rawMarkdownBody',
  frontmatter___relatedProjects___fileAbsolutePath = 'frontmatter___relatedProjects___fileAbsolutePath',
  frontmatter___relatedProjects___fields___slug = 'frontmatter___relatedProjects___fields___slug',
  frontmatter___relatedProjects___html = 'frontmatter___relatedProjects___html',
  frontmatter___relatedProjects___htmlAst = 'frontmatter___relatedProjects___htmlAst',
  frontmatter___relatedProjects___excerptAst = 'frontmatter___relatedProjects___excerptAst',
  frontmatter___relatedProjects___headings = 'frontmatter___relatedProjects___headings',
  frontmatter___relatedProjects___headings___value = 'frontmatter___relatedProjects___headings___value',
  frontmatter___relatedProjects___headings___depth = 'frontmatter___relatedProjects___headings___depth',
  frontmatter___relatedProjects___timeToRead = 'frontmatter___relatedProjects___timeToRead',
  frontmatter___relatedProjects___tableOfContents = 'frontmatter___relatedProjects___tableOfContents',
  frontmatter___relatedProjects___wordCount___paragraphs = 'frontmatter___relatedProjects___wordCount___paragraphs',
  frontmatter___relatedProjects___wordCount___sentences = 'frontmatter___relatedProjects___wordCount___sentences',
  frontmatter___relatedProjects___wordCount___words = 'frontmatter___relatedProjects___wordCount___words',
  frontmatter___relatedProjects___parent___id = 'frontmatter___relatedProjects___parent___id',
  frontmatter___relatedProjects___parent___children = 'frontmatter___relatedProjects___parent___children',
  frontmatter___relatedProjects___children = 'frontmatter___relatedProjects___children',
  frontmatter___relatedProjects___children___id = 'frontmatter___relatedProjects___children___id',
  frontmatter___relatedProjects___children___children = 'frontmatter___relatedProjects___children___children',
  frontmatter___relatedProjects___internal___content = 'frontmatter___relatedProjects___internal___content',
  frontmatter___relatedProjects___internal___contentDigest = 'frontmatter___relatedProjects___internal___contentDigest',
  frontmatter___relatedProjects___internal___description = 'frontmatter___relatedProjects___internal___description',
  frontmatter___relatedProjects___internal___fieldOwners = 'frontmatter___relatedProjects___internal___fieldOwners',
  frontmatter___relatedProjects___internal___ignoreType = 'frontmatter___relatedProjects___internal___ignoreType',
  frontmatter___relatedProjects___internal___mediaType = 'frontmatter___relatedProjects___internal___mediaType',
  frontmatter___relatedProjects___internal___owner = 'frontmatter___relatedProjects___internal___owner',
  frontmatter___relatedProjects___internal___type = 'frontmatter___relatedProjects___internal___type',
  frontmatter___projectMembers = 'frontmatter___projectMembers',
  frontmatter___projectMembers___id = 'frontmatter___projectMembers___id',
  frontmatter___projectMembers___frontmatter___description = 'frontmatter___projectMembers___frontmatter___description',
  frontmatter___projectMembers___frontmatter___id = 'frontmatter___projectMembers___frontmatter___id',
  frontmatter___projectMembers___frontmatter___history = 'frontmatter___projectMembers___frontmatter___history',
  frontmatter___projectMembers___frontmatter___links = 'frontmatter___projectMembers___frontmatter___links',
  frontmatter___projectMembers___frontmatter___books = 'frontmatter___projectMembers___frontmatter___books',
  frontmatter___projectMembers___frontmatter___thesis = 'frontmatter___projectMembers___frontmatter___thesis',
  frontmatter___projectMembers___frontmatter___articles = 'frontmatter___projectMembers___frontmatter___articles',
  frontmatter___projectMembers___frontmatter___contacts = 'frontmatter___projectMembers___frontmatter___contacts',
  frontmatter___projectMembers___frontmatter___address1 = 'frontmatter___projectMembers___frontmatter___address1',
  frontmatter___projectMembers___frontmatter___address2 = 'frontmatter___projectMembers___frontmatter___address2',
  frontmatter___projectMembers___frontmatter___memberRole = 'frontmatter___projectMembers___frontmatter___memberRole',
  frontmatter___projectMembers___frontmatter___memberName = 'frontmatter___projectMembers___frontmatter___memberName',
  frontmatter___projectMembers___frontmatter___memberSince = 'frontmatter___projectMembers___frontmatter___memberSince',
  frontmatter___projectMembers___frontmatter___memberUntil = 'frontmatter___projectMembers___frontmatter___memberUntil',
  frontmatter___projectMembers___frontmatter___memberEmail = 'frontmatter___projectMembers___frontmatter___memberEmail',
  frontmatter___projectMembers___frontmatter___memberLattes = 'frontmatter___projectMembers___frontmatter___memberLattes',
  frontmatter___projectMembers___frontmatter___isFormerMember = 'frontmatter___projectMembers___frontmatter___isFormerMember',
  frontmatter___projectMembers___frontmatter___memberLinkedin = 'frontmatter___projectMembers___frontmatter___memberLinkedin',
  frontmatter___projectMembers___frontmatter___memberType = 'frontmatter___projectMembers___frontmatter___memberType',
  frontmatter___projectMembers___frontmatter___memberOtherInfos = 'frontmatter___projectMembers___frontmatter___memberOtherInfos',
  frontmatter___projectMembers___frontmatter___projectName = 'frontmatter___projectMembers___frontmatter___projectName',
  frontmatter___projectMembers___frontmatter___projectStart = 'frontmatter___projectMembers___frontmatter___projectStart',
  frontmatter___projectMembers___frontmatter___projectEnd = 'frontmatter___projectMembers___frontmatter___projectEnd',
  frontmatter___projectMembers___frontmatter___blogTitle = 'frontmatter___projectMembers___frontmatter___blogTitle',
  frontmatter___projectMembers___frontmatter___notListed = 'frontmatter___projectMembers___frontmatter___notListed',
  frontmatter___projectMembers___frontmatter___blogAuthor = 'frontmatter___projectMembers___frontmatter___blogAuthor',
  frontmatter___projectMembers___frontmatter___date = 'frontmatter___projectMembers___frontmatter___date',
  frontmatter___projectMembers___frontmatter___dateEnd = 'frontmatter___projectMembers___frontmatter___dateEnd',
  frontmatter___projectMembers___frontmatter___featured = 'frontmatter___projectMembers___frontmatter___featured',
  frontmatter___projectMembers___frontmatter___activitieTitle = 'frontmatter___projectMembers___frontmatter___activitieTitle',
  frontmatter___projectMembers___frontmatter___activitieType = 'frontmatter___projectMembers___frontmatter___activitieType',
  frontmatter___projectMembers___frontmatter___activitieLocation = 'frontmatter___projectMembers___frontmatter___activitieLocation',
  frontmatter___projectMembers___frontmatter___dateFormat = 'frontmatter___projectMembers___frontmatter___dateFormat',
  frontmatter___projectMembers___frontmatter___relatedProjects = 'frontmatter___projectMembers___frontmatter___relatedProjects',
  frontmatter___projectMembers___frontmatter___projectMembers = 'frontmatter___projectMembers___frontmatter___projectMembers',
  frontmatter___projectMembers___frontmatter___projectFormerMembers = 'frontmatter___projectMembers___frontmatter___projectFormerMembers',
  frontmatter___projectMembers___frontmatter___coordinators = 'frontmatter___projectMembers___frontmatter___coordinators',
  frontmatter___projectMembers___frontmatter___formerMembers = 'frontmatter___projectMembers___frontmatter___formerMembers',
  frontmatter___projectMembers___frontmatter___title = 'frontmatter___projectMembers___frontmatter___title',
  frontmatter___projectMembers___frontmatter___templateKey = 'frontmatter___projectMembers___frontmatter___templateKey',
  frontmatter___projectMembers___frontmatter___showHour = 'frontmatter___projectMembers___frontmatter___showHour',
  frontmatter___projectMembers___excerpt = 'frontmatter___projectMembers___excerpt',
  frontmatter___projectMembers___rawMarkdownBody = 'frontmatter___projectMembers___rawMarkdownBody',
  frontmatter___projectMembers___fileAbsolutePath = 'frontmatter___projectMembers___fileAbsolutePath',
  frontmatter___projectMembers___fields___slug = 'frontmatter___projectMembers___fields___slug',
  frontmatter___projectMembers___html = 'frontmatter___projectMembers___html',
  frontmatter___projectMembers___htmlAst = 'frontmatter___projectMembers___htmlAst',
  frontmatter___projectMembers___excerptAst = 'frontmatter___projectMembers___excerptAst',
  frontmatter___projectMembers___headings = 'frontmatter___projectMembers___headings',
  frontmatter___projectMembers___headings___value = 'frontmatter___projectMembers___headings___value',
  frontmatter___projectMembers___headings___depth = 'frontmatter___projectMembers___headings___depth',
  frontmatter___projectMembers___timeToRead = 'frontmatter___projectMembers___timeToRead',
  frontmatter___projectMembers___tableOfContents = 'frontmatter___projectMembers___tableOfContents',
  frontmatter___projectMembers___wordCount___paragraphs = 'frontmatter___projectMembers___wordCount___paragraphs',
  frontmatter___projectMembers___wordCount___sentences = 'frontmatter___projectMembers___wordCount___sentences',
  frontmatter___projectMembers___wordCount___words = 'frontmatter___projectMembers___wordCount___words',
  frontmatter___projectMembers___parent___id = 'frontmatter___projectMembers___parent___id',
  frontmatter___projectMembers___parent___children = 'frontmatter___projectMembers___parent___children',
  frontmatter___projectMembers___children = 'frontmatter___projectMembers___children',
  frontmatter___projectMembers___children___id = 'frontmatter___projectMembers___children___id',
  frontmatter___projectMembers___children___children = 'frontmatter___projectMembers___children___children',
  frontmatter___projectMembers___internal___content = 'frontmatter___projectMembers___internal___content',
  frontmatter___projectMembers___internal___contentDigest = 'frontmatter___projectMembers___internal___contentDigest',
  frontmatter___projectMembers___internal___description = 'frontmatter___projectMembers___internal___description',
  frontmatter___projectMembers___internal___fieldOwners = 'frontmatter___projectMembers___internal___fieldOwners',
  frontmatter___projectMembers___internal___ignoreType = 'frontmatter___projectMembers___internal___ignoreType',
  frontmatter___projectMembers___internal___mediaType = 'frontmatter___projectMembers___internal___mediaType',
  frontmatter___projectMembers___internal___owner = 'frontmatter___projectMembers___internal___owner',
  frontmatter___projectMembers___internal___type = 'frontmatter___projectMembers___internal___type',
  frontmatter___projectFormerMembers = 'frontmatter___projectFormerMembers',
  frontmatter___projectFormerMembers___id = 'frontmatter___projectFormerMembers___id',
  frontmatter___projectFormerMembers___frontmatter___description = 'frontmatter___projectFormerMembers___frontmatter___description',
  frontmatter___projectFormerMembers___frontmatter___id = 'frontmatter___projectFormerMembers___frontmatter___id',
  frontmatter___projectFormerMembers___frontmatter___history = 'frontmatter___projectFormerMembers___frontmatter___history',
  frontmatter___projectFormerMembers___frontmatter___links = 'frontmatter___projectFormerMembers___frontmatter___links',
  frontmatter___projectFormerMembers___frontmatter___books = 'frontmatter___projectFormerMembers___frontmatter___books',
  frontmatter___projectFormerMembers___frontmatter___thesis = 'frontmatter___projectFormerMembers___frontmatter___thesis',
  frontmatter___projectFormerMembers___frontmatter___articles = 'frontmatter___projectFormerMembers___frontmatter___articles',
  frontmatter___projectFormerMembers___frontmatter___contacts = 'frontmatter___projectFormerMembers___frontmatter___contacts',
  frontmatter___projectFormerMembers___frontmatter___address1 = 'frontmatter___projectFormerMembers___frontmatter___address1',
  frontmatter___projectFormerMembers___frontmatter___address2 = 'frontmatter___projectFormerMembers___frontmatter___address2',
  frontmatter___projectFormerMembers___frontmatter___memberRole = 'frontmatter___projectFormerMembers___frontmatter___memberRole',
  frontmatter___projectFormerMembers___frontmatter___memberName = 'frontmatter___projectFormerMembers___frontmatter___memberName',
  frontmatter___projectFormerMembers___frontmatter___memberSince = 'frontmatter___projectFormerMembers___frontmatter___memberSince',
  frontmatter___projectFormerMembers___frontmatter___memberUntil = 'frontmatter___projectFormerMembers___frontmatter___memberUntil',
  frontmatter___projectFormerMembers___frontmatter___memberEmail = 'frontmatter___projectFormerMembers___frontmatter___memberEmail',
  frontmatter___projectFormerMembers___frontmatter___memberLattes = 'frontmatter___projectFormerMembers___frontmatter___memberLattes',
  frontmatter___projectFormerMembers___frontmatter___isFormerMember = 'frontmatter___projectFormerMembers___frontmatter___isFormerMember',
  frontmatter___projectFormerMembers___frontmatter___memberLinkedin = 'frontmatter___projectFormerMembers___frontmatter___memberLinkedin',
  frontmatter___projectFormerMembers___frontmatter___memberType = 'frontmatter___projectFormerMembers___frontmatter___memberType',
  frontmatter___projectFormerMembers___frontmatter___memberOtherInfos = 'frontmatter___projectFormerMembers___frontmatter___memberOtherInfos',
  frontmatter___projectFormerMembers___frontmatter___projectName = 'frontmatter___projectFormerMembers___frontmatter___projectName',
  frontmatter___projectFormerMembers___frontmatter___projectStart = 'frontmatter___projectFormerMembers___frontmatter___projectStart',
  frontmatter___projectFormerMembers___frontmatter___projectEnd = 'frontmatter___projectFormerMembers___frontmatter___projectEnd',
  frontmatter___projectFormerMembers___frontmatter___blogTitle = 'frontmatter___projectFormerMembers___frontmatter___blogTitle',
  frontmatter___projectFormerMembers___frontmatter___notListed = 'frontmatter___projectFormerMembers___frontmatter___notListed',
  frontmatter___projectFormerMembers___frontmatter___blogAuthor = 'frontmatter___projectFormerMembers___frontmatter___blogAuthor',
  frontmatter___projectFormerMembers___frontmatter___date = 'frontmatter___projectFormerMembers___frontmatter___date',
  frontmatter___projectFormerMembers___frontmatter___dateEnd = 'frontmatter___projectFormerMembers___frontmatter___dateEnd',
  frontmatter___projectFormerMembers___frontmatter___featured = 'frontmatter___projectFormerMembers___frontmatter___featured',
  frontmatter___projectFormerMembers___frontmatter___activitieTitle = 'frontmatter___projectFormerMembers___frontmatter___activitieTitle',
  frontmatter___projectFormerMembers___frontmatter___activitieType = 'frontmatter___projectFormerMembers___frontmatter___activitieType',
  frontmatter___projectFormerMembers___frontmatter___activitieLocation = 'frontmatter___projectFormerMembers___frontmatter___activitieLocation',
  frontmatter___projectFormerMembers___frontmatter___dateFormat = 'frontmatter___projectFormerMembers___frontmatter___dateFormat',
  frontmatter___projectFormerMembers___frontmatter___relatedProjects = 'frontmatter___projectFormerMembers___frontmatter___relatedProjects',
  frontmatter___projectFormerMembers___frontmatter___projectMembers = 'frontmatter___projectFormerMembers___frontmatter___projectMembers',
  frontmatter___projectFormerMembers___frontmatter___projectFormerMembers = 'frontmatter___projectFormerMembers___frontmatter___projectFormerMembers',
  frontmatter___projectFormerMembers___frontmatter___coordinators = 'frontmatter___projectFormerMembers___frontmatter___coordinators',
  frontmatter___projectFormerMembers___frontmatter___formerMembers = 'frontmatter___projectFormerMembers___frontmatter___formerMembers',
  frontmatter___projectFormerMembers___frontmatter___title = 'frontmatter___projectFormerMembers___frontmatter___title',
  frontmatter___projectFormerMembers___frontmatter___templateKey = 'frontmatter___projectFormerMembers___frontmatter___templateKey',
  frontmatter___projectFormerMembers___frontmatter___showHour = 'frontmatter___projectFormerMembers___frontmatter___showHour',
  frontmatter___projectFormerMembers___excerpt = 'frontmatter___projectFormerMembers___excerpt',
  frontmatter___projectFormerMembers___rawMarkdownBody = 'frontmatter___projectFormerMembers___rawMarkdownBody',
  frontmatter___projectFormerMembers___fileAbsolutePath = 'frontmatter___projectFormerMembers___fileAbsolutePath',
  frontmatter___projectFormerMembers___fields___slug = 'frontmatter___projectFormerMembers___fields___slug',
  frontmatter___projectFormerMembers___html = 'frontmatter___projectFormerMembers___html',
  frontmatter___projectFormerMembers___htmlAst = 'frontmatter___projectFormerMembers___htmlAst',
  frontmatter___projectFormerMembers___excerptAst = 'frontmatter___projectFormerMembers___excerptAst',
  frontmatter___projectFormerMembers___headings = 'frontmatter___projectFormerMembers___headings',
  frontmatter___projectFormerMembers___headings___value = 'frontmatter___projectFormerMembers___headings___value',
  frontmatter___projectFormerMembers___headings___depth = 'frontmatter___projectFormerMembers___headings___depth',
  frontmatter___projectFormerMembers___timeToRead = 'frontmatter___projectFormerMembers___timeToRead',
  frontmatter___projectFormerMembers___tableOfContents = 'frontmatter___projectFormerMembers___tableOfContents',
  frontmatter___projectFormerMembers___wordCount___paragraphs = 'frontmatter___projectFormerMembers___wordCount___paragraphs',
  frontmatter___projectFormerMembers___wordCount___sentences = 'frontmatter___projectFormerMembers___wordCount___sentences',
  frontmatter___projectFormerMembers___wordCount___words = 'frontmatter___projectFormerMembers___wordCount___words',
  frontmatter___projectFormerMembers___parent___id = 'frontmatter___projectFormerMembers___parent___id',
  frontmatter___projectFormerMembers___parent___children = 'frontmatter___projectFormerMembers___parent___children',
  frontmatter___projectFormerMembers___children = 'frontmatter___projectFormerMembers___children',
  frontmatter___projectFormerMembers___children___id = 'frontmatter___projectFormerMembers___children___id',
  frontmatter___projectFormerMembers___children___children = 'frontmatter___projectFormerMembers___children___children',
  frontmatter___projectFormerMembers___internal___content = 'frontmatter___projectFormerMembers___internal___content',
  frontmatter___projectFormerMembers___internal___contentDigest = 'frontmatter___projectFormerMembers___internal___contentDigest',
  frontmatter___projectFormerMembers___internal___description = 'frontmatter___projectFormerMembers___internal___description',
  frontmatter___projectFormerMembers___internal___fieldOwners = 'frontmatter___projectFormerMembers___internal___fieldOwners',
  frontmatter___projectFormerMembers___internal___ignoreType = 'frontmatter___projectFormerMembers___internal___ignoreType',
  frontmatter___projectFormerMembers___internal___mediaType = 'frontmatter___projectFormerMembers___internal___mediaType',
  frontmatter___projectFormerMembers___internal___owner = 'frontmatter___projectFormerMembers___internal___owner',
  frontmatter___projectFormerMembers___internal___type = 'frontmatter___projectFormerMembers___internal___type',
  frontmatter___coordinators = 'frontmatter___coordinators',
  frontmatter___coordinators___id = 'frontmatter___coordinators___id',
  frontmatter___coordinators___frontmatter___description = 'frontmatter___coordinators___frontmatter___description',
  frontmatter___coordinators___frontmatter___id = 'frontmatter___coordinators___frontmatter___id',
  frontmatter___coordinators___frontmatter___history = 'frontmatter___coordinators___frontmatter___history',
  frontmatter___coordinators___frontmatter___links = 'frontmatter___coordinators___frontmatter___links',
  frontmatter___coordinators___frontmatter___books = 'frontmatter___coordinators___frontmatter___books',
  frontmatter___coordinators___frontmatter___thesis = 'frontmatter___coordinators___frontmatter___thesis',
  frontmatter___coordinators___frontmatter___articles = 'frontmatter___coordinators___frontmatter___articles',
  frontmatter___coordinators___frontmatter___contacts = 'frontmatter___coordinators___frontmatter___contacts',
  frontmatter___coordinators___frontmatter___address1 = 'frontmatter___coordinators___frontmatter___address1',
  frontmatter___coordinators___frontmatter___address2 = 'frontmatter___coordinators___frontmatter___address2',
  frontmatter___coordinators___frontmatter___memberRole = 'frontmatter___coordinators___frontmatter___memberRole',
  frontmatter___coordinators___frontmatter___memberName = 'frontmatter___coordinators___frontmatter___memberName',
  frontmatter___coordinators___frontmatter___memberSince = 'frontmatter___coordinators___frontmatter___memberSince',
  frontmatter___coordinators___frontmatter___memberUntil = 'frontmatter___coordinators___frontmatter___memberUntil',
  frontmatter___coordinators___frontmatter___memberEmail = 'frontmatter___coordinators___frontmatter___memberEmail',
  frontmatter___coordinators___frontmatter___memberLattes = 'frontmatter___coordinators___frontmatter___memberLattes',
  frontmatter___coordinators___frontmatter___isFormerMember = 'frontmatter___coordinators___frontmatter___isFormerMember',
  frontmatter___coordinators___frontmatter___memberLinkedin = 'frontmatter___coordinators___frontmatter___memberLinkedin',
  frontmatter___coordinators___frontmatter___memberType = 'frontmatter___coordinators___frontmatter___memberType',
  frontmatter___coordinators___frontmatter___memberOtherInfos = 'frontmatter___coordinators___frontmatter___memberOtherInfos',
  frontmatter___coordinators___frontmatter___projectName = 'frontmatter___coordinators___frontmatter___projectName',
  frontmatter___coordinators___frontmatter___projectStart = 'frontmatter___coordinators___frontmatter___projectStart',
  frontmatter___coordinators___frontmatter___projectEnd = 'frontmatter___coordinators___frontmatter___projectEnd',
  frontmatter___coordinators___frontmatter___blogTitle = 'frontmatter___coordinators___frontmatter___blogTitle',
  frontmatter___coordinators___frontmatter___notListed = 'frontmatter___coordinators___frontmatter___notListed',
  frontmatter___coordinators___frontmatter___blogAuthor = 'frontmatter___coordinators___frontmatter___blogAuthor',
  frontmatter___coordinators___frontmatter___date = 'frontmatter___coordinators___frontmatter___date',
  frontmatter___coordinators___frontmatter___dateEnd = 'frontmatter___coordinators___frontmatter___dateEnd',
  frontmatter___coordinators___frontmatter___featured = 'frontmatter___coordinators___frontmatter___featured',
  frontmatter___coordinators___frontmatter___activitieTitle = 'frontmatter___coordinators___frontmatter___activitieTitle',
  frontmatter___coordinators___frontmatter___activitieType = 'frontmatter___coordinators___frontmatter___activitieType',
  frontmatter___coordinators___frontmatter___activitieLocation = 'frontmatter___coordinators___frontmatter___activitieLocation',
  frontmatter___coordinators___frontmatter___dateFormat = 'frontmatter___coordinators___frontmatter___dateFormat',
  frontmatter___coordinators___frontmatter___relatedProjects = 'frontmatter___coordinators___frontmatter___relatedProjects',
  frontmatter___coordinators___frontmatter___projectMembers = 'frontmatter___coordinators___frontmatter___projectMembers',
  frontmatter___coordinators___frontmatter___projectFormerMembers = 'frontmatter___coordinators___frontmatter___projectFormerMembers',
  frontmatter___coordinators___frontmatter___coordinators = 'frontmatter___coordinators___frontmatter___coordinators',
  frontmatter___coordinators___frontmatter___formerMembers = 'frontmatter___coordinators___frontmatter___formerMembers',
  frontmatter___coordinators___frontmatter___title = 'frontmatter___coordinators___frontmatter___title',
  frontmatter___coordinators___frontmatter___templateKey = 'frontmatter___coordinators___frontmatter___templateKey',
  frontmatter___coordinators___frontmatter___showHour = 'frontmatter___coordinators___frontmatter___showHour',
  frontmatter___coordinators___excerpt = 'frontmatter___coordinators___excerpt',
  frontmatter___coordinators___rawMarkdownBody = 'frontmatter___coordinators___rawMarkdownBody',
  frontmatter___coordinators___fileAbsolutePath = 'frontmatter___coordinators___fileAbsolutePath',
  frontmatter___coordinators___fields___slug = 'frontmatter___coordinators___fields___slug',
  frontmatter___coordinators___html = 'frontmatter___coordinators___html',
  frontmatter___coordinators___htmlAst = 'frontmatter___coordinators___htmlAst',
  frontmatter___coordinators___excerptAst = 'frontmatter___coordinators___excerptAst',
  frontmatter___coordinators___headings = 'frontmatter___coordinators___headings',
  frontmatter___coordinators___headings___value = 'frontmatter___coordinators___headings___value',
  frontmatter___coordinators___headings___depth = 'frontmatter___coordinators___headings___depth',
  frontmatter___coordinators___timeToRead = 'frontmatter___coordinators___timeToRead',
  frontmatter___coordinators___tableOfContents = 'frontmatter___coordinators___tableOfContents',
  frontmatter___coordinators___wordCount___paragraphs = 'frontmatter___coordinators___wordCount___paragraphs',
  frontmatter___coordinators___wordCount___sentences = 'frontmatter___coordinators___wordCount___sentences',
  frontmatter___coordinators___wordCount___words = 'frontmatter___coordinators___wordCount___words',
  frontmatter___coordinators___parent___id = 'frontmatter___coordinators___parent___id',
  frontmatter___coordinators___parent___children = 'frontmatter___coordinators___parent___children',
  frontmatter___coordinators___children = 'frontmatter___coordinators___children',
  frontmatter___coordinators___children___id = 'frontmatter___coordinators___children___id',
  frontmatter___coordinators___children___children = 'frontmatter___coordinators___children___children',
  frontmatter___coordinators___internal___content = 'frontmatter___coordinators___internal___content',
  frontmatter___coordinators___internal___contentDigest = 'frontmatter___coordinators___internal___contentDigest',
  frontmatter___coordinators___internal___description = 'frontmatter___coordinators___internal___description',
  frontmatter___coordinators___internal___fieldOwners = 'frontmatter___coordinators___internal___fieldOwners',
  frontmatter___coordinators___internal___ignoreType = 'frontmatter___coordinators___internal___ignoreType',
  frontmatter___coordinators___internal___mediaType = 'frontmatter___coordinators___internal___mediaType',
  frontmatter___coordinators___internal___owner = 'frontmatter___coordinators___internal___owner',
  frontmatter___coordinators___internal___type = 'frontmatter___coordinators___internal___type',
  frontmatter___formerMembers = 'frontmatter___formerMembers',
  frontmatter___formerMembers___id = 'frontmatter___formerMembers___id',
  frontmatter___formerMembers___frontmatter___description = 'frontmatter___formerMembers___frontmatter___description',
  frontmatter___formerMembers___frontmatter___id = 'frontmatter___formerMembers___frontmatter___id',
  frontmatter___formerMembers___frontmatter___history = 'frontmatter___formerMembers___frontmatter___history',
  frontmatter___formerMembers___frontmatter___links = 'frontmatter___formerMembers___frontmatter___links',
  frontmatter___formerMembers___frontmatter___books = 'frontmatter___formerMembers___frontmatter___books',
  frontmatter___formerMembers___frontmatter___thesis = 'frontmatter___formerMembers___frontmatter___thesis',
  frontmatter___formerMembers___frontmatter___articles = 'frontmatter___formerMembers___frontmatter___articles',
  frontmatter___formerMembers___frontmatter___contacts = 'frontmatter___formerMembers___frontmatter___contacts',
  frontmatter___formerMembers___frontmatter___address1 = 'frontmatter___formerMembers___frontmatter___address1',
  frontmatter___formerMembers___frontmatter___address2 = 'frontmatter___formerMembers___frontmatter___address2',
  frontmatter___formerMembers___frontmatter___memberRole = 'frontmatter___formerMembers___frontmatter___memberRole',
  frontmatter___formerMembers___frontmatter___memberName = 'frontmatter___formerMembers___frontmatter___memberName',
  frontmatter___formerMembers___frontmatter___memberSince = 'frontmatter___formerMembers___frontmatter___memberSince',
  frontmatter___formerMembers___frontmatter___memberUntil = 'frontmatter___formerMembers___frontmatter___memberUntil',
  frontmatter___formerMembers___frontmatter___memberEmail = 'frontmatter___formerMembers___frontmatter___memberEmail',
  frontmatter___formerMembers___frontmatter___memberLattes = 'frontmatter___formerMembers___frontmatter___memberLattes',
  frontmatter___formerMembers___frontmatter___isFormerMember = 'frontmatter___formerMembers___frontmatter___isFormerMember',
  frontmatter___formerMembers___frontmatter___memberLinkedin = 'frontmatter___formerMembers___frontmatter___memberLinkedin',
  frontmatter___formerMembers___frontmatter___memberType = 'frontmatter___formerMembers___frontmatter___memberType',
  frontmatter___formerMembers___frontmatter___memberOtherInfos = 'frontmatter___formerMembers___frontmatter___memberOtherInfos',
  frontmatter___formerMembers___frontmatter___projectName = 'frontmatter___formerMembers___frontmatter___projectName',
  frontmatter___formerMembers___frontmatter___projectStart = 'frontmatter___formerMembers___frontmatter___projectStart',
  frontmatter___formerMembers___frontmatter___projectEnd = 'frontmatter___formerMembers___frontmatter___projectEnd',
  frontmatter___formerMembers___frontmatter___blogTitle = 'frontmatter___formerMembers___frontmatter___blogTitle',
  frontmatter___formerMembers___frontmatter___notListed = 'frontmatter___formerMembers___frontmatter___notListed',
  frontmatter___formerMembers___frontmatter___blogAuthor = 'frontmatter___formerMembers___frontmatter___blogAuthor',
  frontmatter___formerMembers___frontmatter___date = 'frontmatter___formerMembers___frontmatter___date',
  frontmatter___formerMembers___frontmatter___dateEnd = 'frontmatter___formerMembers___frontmatter___dateEnd',
  frontmatter___formerMembers___frontmatter___featured = 'frontmatter___formerMembers___frontmatter___featured',
  frontmatter___formerMembers___frontmatter___activitieTitle = 'frontmatter___formerMembers___frontmatter___activitieTitle',
  frontmatter___formerMembers___frontmatter___activitieType = 'frontmatter___formerMembers___frontmatter___activitieType',
  frontmatter___formerMembers___frontmatter___activitieLocation = 'frontmatter___formerMembers___frontmatter___activitieLocation',
  frontmatter___formerMembers___frontmatter___dateFormat = 'frontmatter___formerMembers___frontmatter___dateFormat',
  frontmatter___formerMembers___frontmatter___relatedProjects = 'frontmatter___formerMembers___frontmatter___relatedProjects',
  frontmatter___formerMembers___frontmatter___projectMembers = 'frontmatter___formerMembers___frontmatter___projectMembers',
  frontmatter___formerMembers___frontmatter___projectFormerMembers = 'frontmatter___formerMembers___frontmatter___projectFormerMembers',
  frontmatter___formerMembers___frontmatter___coordinators = 'frontmatter___formerMembers___frontmatter___coordinators',
  frontmatter___formerMembers___frontmatter___formerMembers = 'frontmatter___formerMembers___frontmatter___formerMembers',
  frontmatter___formerMembers___frontmatter___title = 'frontmatter___formerMembers___frontmatter___title',
  frontmatter___formerMembers___frontmatter___templateKey = 'frontmatter___formerMembers___frontmatter___templateKey',
  frontmatter___formerMembers___frontmatter___showHour = 'frontmatter___formerMembers___frontmatter___showHour',
  frontmatter___formerMembers___excerpt = 'frontmatter___formerMembers___excerpt',
  frontmatter___formerMembers___rawMarkdownBody = 'frontmatter___formerMembers___rawMarkdownBody',
  frontmatter___formerMembers___fileAbsolutePath = 'frontmatter___formerMembers___fileAbsolutePath',
  frontmatter___formerMembers___fields___slug = 'frontmatter___formerMembers___fields___slug',
  frontmatter___formerMembers___html = 'frontmatter___formerMembers___html',
  frontmatter___formerMembers___htmlAst = 'frontmatter___formerMembers___htmlAst',
  frontmatter___formerMembers___excerptAst = 'frontmatter___formerMembers___excerptAst',
  frontmatter___formerMembers___headings = 'frontmatter___formerMembers___headings',
  frontmatter___formerMembers___headings___value = 'frontmatter___formerMembers___headings___value',
  frontmatter___formerMembers___headings___depth = 'frontmatter___formerMembers___headings___depth',
  frontmatter___formerMembers___timeToRead = 'frontmatter___formerMembers___timeToRead',
  frontmatter___formerMembers___tableOfContents = 'frontmatter___formerMembers___tableOfContents',
  frontmatter___formerMembers___wordCount___paragraphs = 'frontmatter___formerMembers___wordCount___paragraphs',
  frontmatter___formerMembers___wordCount___sentences = 'frontmatter___formerMembers___wordCount___sentences',
  frontmatter___formerMembers___wordCount___words = 'frontmatter___formerMembers___wordCount___words',
  frontmatter___formerMembers___parent___id = 'frontmatter___formerMembers___parent___id',
  frontmatter___formerMembers___parent___children = 'frontmatter___formerMembers___parent___children',
  frontmatter___formerMembers___children = 'frontmatter___formerMembers___children',
  frontmatter___formerMembers___children___id = 'frontmatter___formerMembers___children___id',
  frontmatter___formerMembers___children___children = 'frontmatter___formerMembers___children___children',
  frontmatter___formerMembers___internal___content = 'frontmatter___formerMembers___internal___content',
  frontmatter___formerMembers___internal___contentDigest = 'frontmatter___formerMembers___internal___contentDigest',
  frontmatter___formerMembers___internal___description = 'frontmatter___formerMembers___internal___description',
  frontmatter___formerMembers___internal___fieldOwners = 'frontmatter___formerMembers___internal___fieldOwners',
  frontmatter___formerMembers___internal___ignoreType = 'frontmatter___formerMembers___internal___ignoreType',
  frontmatter___formerMembers___internal___mediaType = 'frontmatter___formerMembers___internal___mediaType',
  frontmatter___formerMembers___internal___owner = 'frontmatter___formerMembers___internal___owner',
  frontmatter___formerMembers___internal___type = 'frontmatter___formerMembers___internal___type',
  frontmatter___title = 'frontmatter___title',
  frontmatter___templateKey = 'frontmatter___templateKey',
  frontmatter___showHour = 'frontmatter___showHour',
  excerpt = 'excerpt',
  rawMarkdownBody = 'rawMarkdownBody',
  fileAbsolutePath = 'fileAbsolutePath',
  fields___readingTime___text = 'fields___readingTime___text',
  fields___readingTime___minutes = 'fields___readingTime___minutes',
  fields___readingTime___time = 'fields___readingTime___time',
  fields___readingTime___words = 'fields___readingTime___words',
  fields___slug = 'fields___slug',
  html = 'html',
  htmlAst = 'htmlAst',
  excerptAst = 'excerptAst',
  headings = 'headings',
  headings___value = 'headings___value',
  headings___depth = 'headings___depth',
  timeToRead = 'timeToRead',
  tableOfContents = 'tableOfContents',
  wordCount___paragraphs = 'wordCount___paragraphs',
  wordCount___sentences = 'wordCount___sentences',
  wordCount___words = 'wordCount___words',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type MarkdownRemarkFieldsFilterInput = {
  readingTime?: Maybe<MarkdownRemarkFieldsReadingTimeFilterInput>,
  slug?: Maybe<StringQueryOperatorInput>,
};

export type MarkdownRemarkFieldsReadingTime = {
  text?: Maybe<Scalars['String']>,
  minutes?: Maybe<Scalars['Float']>,
  time?: Maybe<Scalars['Float']>,
  words?: Maybe<Scalars['Int']>,
};

export type MarkdownRemarkFieldsReadingTimeFilterInput = {
  text?: Maybe<StringQueryOperatorInput>,
  minutes?: Maybe<FloatQueryOperatorInput>,
  time?: Maybe<FloatQueryOperatorInput>,
  words?: Maybe<IntQueryOperatorInput>,
};

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  frontmatter?: Maybe<FrontmatterFilterInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>,
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>,
  html?: Maybe<StringQueryOperatorInput>,
  htmlAst?: Maybe<JsonQueryOperatorInput>,
  excerptAst?: Maybe<JsonQueryOperatorInput>,
  headings?: Maybe<MarkdownHeadingFilterListInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  tableOfContents?: Maybe<StringQueryOperatorInput>,
  wordCount?: Maybe<MarkdownWordCountFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type MarkdownRemarkFilterListInput = {
  elemMatch?: Maybe<MarkdownRemarkFilterInput>,
};

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<MarkdownRemarkEdge>,
  nodes: Array<MarkdownRemark>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>,
  sentences?: Maybe<Scalars['Int']>,
  words?: Maybe<Scalars['Int']>,
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>,
  sentences?: Maybe<IntQueryOperatorInput>,
  words?: Maybe<IntQueryOperatorInput>,
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>,
};

export type OtherInfos = {
  info?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type OtherInfosFilterInput = {
  info?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  label?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
};

export type OtherInfosFilterListInput = {
  elemMatch?: Maybe<OtherInfosFilterInput>,
};

export type PageInfo = {
  currentPage: Scalars['Int'],
  hasPreviousPage: Scalars['Boolean'],
  hasNextPage: Scalars['Boolean'],
  itemCount: Scalars['Int'],
  pageCount: Scalars['Int'],
  perPage?: Maybe<Scalars['Int']>,
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>,
  turdSize?: Maybe<Scalars['Float']>,
  alphaMax?: Maybe<Scalars['Float']>,
  optCurve?: Maybe<Scalars['Boolean']>,
  optTolerance?: Maybe<Scalars['Float']>,
  threshold?: Maybe<Scalars['Int']>,
  blackOnWhite?: Maybe<Scalars['Boolean']>,
  color?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
};

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
  TURNPOLICY_WHITE = 'TURNPOLICY_WHITE',
  TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
  TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
  TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
  TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY'
}

export type Query = {
  file?: Maybe<File>,
  allFile: FileConnection,
  imageSharp?: Maybe<ImageSharp>,
  allImageSharp: ImageSharpConnection,
  markdownRemark?: Maybe<MarkdownRemark>,
  allMarkdownRemark: MarkdownRemarkConnection,
  sitePage?: Maybe<SitePage>,
  allSitePage: SitePageConnection,
  sitePlugin?: Maybe<SitePlugin>,
  allSitePlugin: SitePluginConnection,
  site?: Maybe<Site>,
  allSite: SiteConnection,
  directory?: Maybe<Directory>,
  allDirectory: DirectoryConnection,
};


export type QueryFileArgs = {
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<FloatQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>,
  sort?: Maybe<FileSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryImageSharpArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>,
  sort?: Maybe<ImageSharpSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  frontmatter?: Maybe<FrontmatterFilterInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>,
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>,
  html?: Maybe<StringQueryOperatorInput>,
  htmlAst?: Maybe<JsonQueryOperatorInput>,
  excerptAst?: Maybe<JsonQueryOperatorInput>,
  headings?: Maybe<MarkdownHeadingFilterListInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  tableOfContents?: Maybe<StringQueryOperatorInput>,
  wordCount?: Maybe<MarkdownWordCountFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>,
  sort?: Maybe<MarkdownRemarkSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePageArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>,
  sort?: Maybe<SitePageSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>,
  sort?: Maybe<SitePluginSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>,
  sort?: Maybe<SiteSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryDirectoryArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<FloatQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>,
  sort?: Maybe<DirectorySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};

export type ResearchCard = {
  description: Scalars['String'],
  links?: Maybe<Array<Links>>,
};

export type ResearchCardFilterInput = {
  description?: Maybe<StringQueryOperatorInput>,
  links?: Maybe<LinksFilterListInput>,
};

export type ResearchCardFilterListInput = {
  elemMatch?: Maybe<ResearchCardFilterInput>,
};

export type Site = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  siteMetadata?: Maybe<SiteSiteMetadata>,
  port?: Maybe<Scalars['Int']>,
  host?: Maybe<Scalars['String']>,
  polyfill?: Maybe<Scalars['Boolean']>,
  pathPrefix?: Maybe<Scalars['String']>,
  buildTime?: Maybe<Scalars['Date']>,
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SiteConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SiteGroupConnection>,
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SiteFieldsEnum
};

export type SiteEdge = {
  next?: Maybe<Site>,
  node: Site,
  previous?: Maybe<Site>,
};

export enum SiteFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  siteMetadata___title = 'siteMetadata___title',
  siteMetadata___description = 'siteMetadata___description',
  port = 'port',
  host = 'host',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
  buildTime = 'buildTime'
}

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>,
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePage = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  path?: Maybe<Scalars['String']>,
  internalComponentName?: Maybe<Scalars['String']>,
  component?: Maybe<Scalars['String']>,
  componentChunkName?: Maybe<Scalars['String']>,
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>,
  context?: Maybe<SitePageContext>,
  pluginCreator?: Maybe<SitePlugin>,
  pluginCreatorId?: Maybe<Scalars['String']>,
  componentPath?: Maybe<Scalars['String']>,
};

export type SitePageConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePageGroupConnection>,
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePageFieldsEnum
};

export type SitePageContext = {
  id?: Maybe<Scalars['String']>,
};

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
};

export type SitePageEdge = {
  next?: Maybe<SitePage>,
  node: SitePage,
  previous?: Maybe<SitePage>,
};

export enum SitePageFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  path = 'path',
  internalComponentName = 'internalComponentName',
  component = 'component',
  componentChunkName = 'componentChunkName',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  context___id = 'context___id',
  pluginCreator___id = 'pluginCreator___id',
  pluginCreator___parent___id = 'pluginCreator___parent___id',
  pluginCreator___parent___parent___id = 'pluginCreator___parent___parent___id',
  pluginCreator___parent___parent___children = 'pluginCreator___parent___parent___children',
  pluginCreator___parent___children = 'pluginCreator___parent___children',
  pluginCreator___parent___children___id = 'pluginCreator___parent___children___id',
  pluginCreator___parent___children___children = 'pluginCreator___parent___children___children',
  pluginCreator___parent___internal___content = 'pluginCreator___parent___internal___content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator___parent___internal___contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator___parent___internal___description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator___parent___internal___ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator___parent___internal___mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator___parent___internal___owner',
  pluginCreator___parent___internal___type = 'pluginCreator___parent___internal___type',
  pluginCreator___children = 'pluginCreator___children',
  pluginCreator___children___id = 'pluginCreator___children___id',
  pluginCreator___children___parent___id = 'pluginCreator___children___parent___id',
  pluginCreator___children___parent___children = 'pluginCreator___children___parent___children',
  pluginCreator___children___children = 'pluginCreator___children___children',
  pluginCreator___children___children___id = 'pluginCreator___children___children___id',
  pluginCreator___children___children___children = 'pluginCreator___children___children___children',
  pluginCreator___children___internal___content = 'pluginCreator___children___internal___content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator___children___internal___contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator___children___internal___description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator___children___internal___fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator___children___internal___ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator___children___internal___mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator___children___internal___owner',
  pluginCreator___children___internal___type = 'pluginCreator___children___internal___type',
  pluginCreator___internal___content = 'pluginCreator___internal___content',
  pluginCreator___internal___contentDigest = 'pluginCreator___internal___contentDigest',
  pluginCreator___internal___description = 'pluginCreator___internal___description',
  pluginCreator___internal___fieldOwners = 'pluginCreator___internal___fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator___internal___ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator___internal___mediaType',
  pluginCreator___internal___owner = 'pluginCreator___internal___owner',
  pluginCreator___internal___type = 'pluginCreator___internal___type',
  pluginCreator___resolve = 'pluginCreator___resolve',
  pluginCreator___name = 'pluginCreator___name',
  pluginCreator___version = 'pluginCreator___version',
  pluginCreator___pluginOptions___plugins = 'pluginCreator___pluginOptions___plugins',
  pluginCreator___pluginOptions___plugins___resolve = 'pluginCreator___pluginOptions___plugins___resolve',
  pluginCreator___pluginOptions___plugins___id = 'pluginCreator___pluginOptions___plugins___id',
  pluginCreator___pluginOptions___plugins___name = 'pluginCreator___pluginOptions___plugins___name',
  pluginCreator___pluginOptions___plugins___version = 'pluginCreator___pluginOptions___plugins___version',
  pluginCreator___pluginOptions___plugins___browserAPIs = 'pluginCreator___pluginOptions___plugins___browserAPIs',
  pluginCreator___pluginOptions___plugins___ssrAPIs = 'pluginCreator___pluginOptions___plugins___ssrAPIs',
  pluginCreator___pluginOptions___plugins___pluginFilepath = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
  pluginCreator___pluginOptions___trackingId = 'pluginCreator___pluginOptions___trackingId',
  pluginCreator___pluginOptions___fonts = 'pluginCreator___pluginOptions___fonts',
  pluginCreator___pluginOptions___display = 'pluginCreator___pluginOptions___display',
  pluginCreator___pluginOptions___path = 'pluginCreator___pluginOptions___path',
  pluginCreator___pluginOptions___name = 'pluginCreator___pluginOptions___name',
  pluginCreator___pluginOptions___maxWidth = 'pluginCreator___pluginOptions___maxWidth',
  pluginCreator___pluginOptions___showCaptions = 'pluginCreator___pluginOptions___showCaptions',
  pluginCreator___pluginOptions___destinationDir = 'pluginCreator___pluginOptions___destinationDir',
  pluginCreator___pluginOptions___modulePath = 'pluginCreator___pluginOptions___modulePath',
  pluginCreator___pluginOptions___manualInit = 'pluginCreator___pluginOptions___manualInit',
  pluginCreator___pluginOptions___htmlTitle = 'pluginCreator___pluginOptions___htmlTitle',
  pluginCreator___pluginOptions___htmlFavicon = 'pluginCreator___pluginOptions___htmlFavicon',
  pluginCreator___pluginOptions___mergeSecurityHeaders = 'pluginCreator___pluginOptions___mergeSecurityHeaders',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator___pluginOptions___pathCheck',
  pluginCreator___nodeAPIs = 'pluginCreator___nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator___browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator___ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator___pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator___packageJson___name',
  pluginCreator___packageJson___description = 'pluginCreator___packageJson___description',
  pluginCreator___packageJson___version = 'pluginCreator___packageJson___version',
  pluginCreator___packageJson___main = 'pluginCreator___packageJson___main',
  pluginCreator___packageJson___license = 'pluginCreator___packageJson___license',
  pluginCreator___packageJson___dependencies = 'pluginCreator___packageJson___dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator___packageJson___dependencies___name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator___packageJson___dependencies___version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator___packageJson___devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator___packageJson___devDependencies___name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator___packageJson___devDependencies___version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator___packageJson___peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator___packageJson___peerDependencies___name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator___packageJson___peerDependencies___version',
  pluginCreator___packageJson___keywords = 'pluginCreator___packageJson___keywords',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath'
}

export type SitePageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>,
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SitePlugin = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  resolve?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<SitePluginPluginOptions>,
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
  packageJson?: Maybe<SitePluginPackageJson>,
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePluginGroupConnection>,
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePluginFieldsEnum
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>,
  node: SitePlugin,
  previous?: Maybe<SitePlugin>,
};

export enum SitePluginFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___plugins = 'pluginOptions___plugins',
  pluginOptions___plugins___resolve = 'pluginOptions___plugins___resolve',
  pluginOptions___plugins___id = 'pluginOptions___plugins___id',
  pluginOptions___plugins___name = 'pluginOptions___plugins___name',
  pluginOptions___plugins___version = 'pluginOptions___plugins___version',
  pluginOptions___plugins___pluginOptions___name = 'pluginOptions___plugins___pluginOptions___name',
  pluginOptions___plugins___pluginOptions___maxWidth = 'pluginOptions___plugins___pluginOptions___maxWidth',
  pluginOptions___plugins___pluginOptions___showCaptions = 'pluginOptions___plugins___pluginOptions___showCaptions',
  pluginOptions___plugins___pluginOptions___destinationDir = 'pluginOptions___plugins___pluginOptions___destinationDir',
  pluginOptions___plugins___browserAPIs = 'pluginOptions___plugins___browserAPIs',
  pluginOptions___plugins___ssrAPIs = 'pluginOptions___plugins___ssrAPIs',
  pluginOptions___plugins___pluginFilepath = 'pluginOptions___plugins___pluginFilepath',
  pluginOptions___trackingId = 'pluginOptions___trackingId',
  pluginOptions___fonts = 'pluginOptions___fonts',
  pluginOptions___display = 'pluginOptions___display',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___maxWidth = 'pluginOptions___maxWidth',
  pluginOptions___showCaptions = 'pluginOptions___showCaptions',
  pluginOptions___destinationDir = 'pluginOptions___destinationDir',
  pluginOptions___modulePath = 'pluginOptions___modulePath',
  pluginOptions___manualInit = 'pluginOptions___manualInit',
  pluginOptions___htmlTitle = 'pluginOptions___htmlTitle',
  pluginOptions___htmlFavicon = 'pluginOptions___htmlFavicon',
  pluginOptions___mergeSecurityHeaders = 'pluginOptions___mergeSecurityHeaders',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___dependencies___name = 'packageJson___dependencies___name',
  packageJson___dependencies___version = 'packageJson___dependencies___version',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___devDependencies___name = 'packageJson___devDependencies___name',
  packageJson___devDependencies___version = 'packageJson___devDependencies___version',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___peerDependencies___name = 'packageJson___peerDependencies___name',
  packageJson___peerDependencies___version = 'packageJson___peerDependencies___version',
  packageJson___keywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>,
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  main?: Maybe<Scalars['String']>,
  license?: Maybe<Scalars['String']>,
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>,
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>,
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>,
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>,
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>,
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  main?: Maybe<StringQueryOperatorInput>,
  license?: Maybe<StringQueryOperatorInput>,
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>,
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>,
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>,
  keywords?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>,
};

export type SitePluginPluginOptions = {
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>,
  trackingId?: Maybe<Scalars['String']>,
  fonts?: Maybe<Array<Maybe<Scalars['String']>>>,
  display?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  maxWidth?: Maybe<Scalars['Int']>,
  showCaptions?: Maybe<Scalars['Boolean']>,
  destinationDir?: Maybe<Scalars['String']>,
  modulePath?: Maybe<Scalars['String']>,
  manualInit?: Maybe<Scalars['Boolean']>,
  htmlTitle?: Maybe<Scalars['String']>,
  htmlFavicon?: Maybe<Scalars['String']>,
  mergeSecurityHeaders?: Maybe<Scalars['Boolean']>,
  pathCheck?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>,
  trackingId?: Maybe<StringQueryOperatorInput>,
  fonts?: Maybe<StringQueryOperatorInput>,
  display?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  maxWidth?: Maybe<IntQueryOperatorInput>,
  showCaptions?: Maybe<BooleanQueryOperatorInput>,
  destinationDir?: Maybe<StringQueryOperatorInput>,
  modulePath?: Maybe<StringQueryOperatorInput>,
  manualInit?: Maybe<BooleanQueryOperatorInput>,
  htmlTitle?: Maybe<StringQueryOperatorInput>,
  htmlFavicon?: Maybe<StringQueryOperatorInput>,
  mergeSecurityHeaders?: Maybe<BooleanQueryOperatorInput>,
  pathCheck?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginPluginOptionsPlugins = {
  resolve?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>,
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
  name?: Maybe<Scalars['String']>,
  maxWidth?: Maybe<Scalars['Int']>,
  showCaptions?: Maybe<Scalars['Boolean']>,
  destinationDir?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  maxWidth?: Maybe<IntQueryOperatorInput>,
  showCaptions?: Maybe<BooleanQueryOperatorInput>,
  destinationDir?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
};
export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type ActivitiesAndNewsPageQueryVariables = {};


export type ActivitiesAndNewsPageQuery = { allMarkdownRemark: { edges: Array<{ node: (
        Pick<MarkdownRemark, 'excerpt'>
        & { fields: Maybe<(
          Pick<MarkdownRemarkFields, 'slug'>
          & { readingTime: Maybe<Pick<MarkdownRemarkFieldsReadingTime, 'text'>> }
        )>, frontmatter: Maybe<(
          Pick<Frontmatter, 'templateKey' | 'blogTitle' | 'blogAuthor' | 'activitieTitle' | 'activitieType' | 'dateFormat' | 'activitieLocation' | 'date'>
          & { yearOnly: Frontmatter['date'], monthAndYear: Frontmatter['date'], dateTime: Frontmatter['date'], dateOnly: Frontmatter['date'], endYearOnly: Frontmatter['dateEnd'], endMonthAndYear: Frontmatter['dateEnd'], endDateTime: Frontmatter['dateEnd'], endDateOnly: Frontmatter['dateEnd'] }
          & { image: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<GatsbyImageSharpFluid_WithWebpFragment> }> }> }
        )> }
      ) }> } };

export type ActivitiesQueryVariables = {};


export type ActivitiesQuery = { allMarkdownRemark: { edges: Array<{ node: (
        Pick<MarkdownRemark, 'excerpt'>
        & { fields: Maybe<(
          Pick<MarkdownRemarkFields, 'slug'>
          & { readingTime: Maybe<Pick<MarkdownRemarkFieldsReadingTime, 'text'>> }
        )>, frontmatter: Maybe<(
          Pick<Frontmatter, 'templateKey' | 'blogTitle' | 'blogAuthor' | 'activitieTitle' | 'activitieType' | 'dateFormat' | 'activitieLocation' | 'date'>
          & { yearOnly: Frontmatter['date'], monthAndYear: Frontmatter['date'], dateTime: Frontmatter['date'], dateOnly: Frontmatter['date'], endYearOnly: Frontmatter['dateEnd'], endMonthAndYear: Frontmatter['dateEnd'], endDateTime: Frontmatter['dateEnd'], endDateOnly: Frontmatter['dateEnd'] }
          & { image: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<GatsbyImageSharpFluid_WithWebpFragment> }> }> }
        )> }
      ) }> } };

export type BlogPostsPageQueryVariables = {};


export type BlogPostsPageQuery = { allMarkdownRemark: { edges: Array<{ node: (
        Pick<MarkdownRemark, 'excerpt'>
        & { fields: Maybe<(
          Pick<MarkdownRemarkFields, 'slug'>
          & { readingTime: Maybe<Pick<MarkdownRemarkFieldsReadingTime, 'text'>> }
        )>, frontmatter: Maybe<(
          Pick<Frontmatter, 'templateKey' | 'blogTitle' | 'blogAuthor' | 'activitieTitle' | 'activitieType' | 'dateFormat' | 'activitieLocation' | 'date'>
          & { yearOnly: Frontmatter['date'], monthAndYear: Frontmatter['date'], dateTime: Frontmatter['date'], dateOnly: Frontmatter['date'], endYearOnly: Frontmatter['dateEnd'], endMonthAndYear: Frontmatter['dateEnd'], endDateTime: Frontmatter['dateEnd'], endDateOnly: Frontmatter['dateEnd'] }
          & { image: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<GatsbyImageSharpFluid_WithWebpFragment> }> }> }
        )> }
      ) }> } };

export type NewsAndArticlesPageQueryVariables = {};


export type NewsAndArticlesPageQuery = { allMarkdownRemark: { edges: Array<{ node: (
        Pick<MarkdownRemark, 'excerpt'>
        & { fields: Maybe<(
          Pick<MarkdownRemarkFields, 'slug'>
          & { readingTime: Maybe<Pick<MarkdownRemarkFieldsReadingTime, 'text'>> }
        )>, frontmatter: Maybe<(
          Pick<Frontmatter, 'templateKey' | 'blogTitle' | 'blogAuthor' | 'activitieTitle' | 'activitieType' | 'dateFormat' | 'activitieLocation' | 'date'>
          & { yearOnly: Frontmatter['date'], monthAndYear: Frontmatter['date'], dateTime: Frontmatter['date'], dateOnly: Frontmatter['date'], endYearOnly: Frontmatter['dateEnd'], endMonthAndYear: Frontmatter['dateEnd'], endDateTime: Frontmatter['dateEnd'], endDateOnly: Frontmatter['dateEnd'] }
          & { image: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<GatsbyImageSharpFluid_WithWebpFragment> }> }> }
        )> }
      ) }> } };

export type ProjectsPageQueryVariables = {};


export type ProjectsPageQuery = { allMarkdownRemark: ProjectsFragment };

export type AboutPageTemplateQueryVariables = {};


export type AboutPageTemplateQuery = { markdownRemark: Maybe<(
    Pick<MarkdownRemark, 'html'>
    & { frontmatter: Maybe<Pick<Frontmatter, 'description'>> }
  )> };

export type ActivitiePostByIdQueryVariables = {
  id: Scalars['String']
};


export type ActivitiePostByIdQuery = { markdownRemark: Maybe<(
    Pick<MarkdownRemark, 'html' | 'excerpt'>
    & { frontmatter: Maybe<(
      Pick<Frontmatter, 'activitieTitle' | 'activitieType' | 'dateFormat' | 'activitieLocation'>
      & { yearOnly: Frontmatter['date'], monthAndYear: Frontmatter['date'], dateTime: Frontmatter['date'], dateOnly: Frontmatter['date'], endYearOnly: Frontmatter['dateEnd'], endMonthAndYear: Frontmatter['dateEnd'], endDateTime: Frontmatter['dateEnd'], endDateOnly: Frontmatter['dateEnd'] }
      & { relatedProjects: Maybe<Array<Maybe<{ fields: Maybe<Pick<MarkdownRemarkFields, 'slug'>>, frontmatter: Maybe<Pick<Frontmatter, 'projectName'>> }>>>, activitieLink: Maybe<Pick<FeaturedLink, 'label' | 'url'>> }
    )> }
  )> };

export type BlogPostByIdQueryVariables = {
  id: Scalars['String']
};


export type BlogPostByIdQuery = { markdownRemark: Maybe<(
    Pick<MarkdownRemark, 'html' | 'excerpt'>
    & { frontmatter: Maybe<(
      Pick<Frontmatter, 'blogTitle' | 'blogAuthor' | 'date'>
      & { relatedProjects: Maybe<Array<Maybe<{ fields: Maybe<Pick<MarkdownRemarkFields, 'slug'>>, frontmatter: Maybe<Pick<Frontmatter, 'projectName'>> }>>>, image: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<GatsbyImageSharpFluid_WithWebpFragment> }> }> }
    )>, fields: Maybe<{ readingTime: Maybe<Pick<MarkdownRemarkFieldsReadingTime, 'text'>> }> }
  )> };

export type ContactPageTemplateQueryVariables = {};


export type ContactPageTemplateQuery = { markdownRemark: Maybe<{ frontmatter: Maybe<(
      Pick<Frontmatter, 'address1' | 'address2'>
      & { contacts: Maybe<Array<Pick<Contact, 'name' | 'email'>>> }
    )> }> };

export type HighlightFragment = { fields: Maybe<Pick<MarkdownRemarkFields, 'slug'>>, frontmatter: Maybe<(
    Pick<Frontmatter, 'templateKey' | 'blogTitle' | 'projectName' | 'activitieTitle' | 'activitieType' | 'activitieLocation' | 'date'>
    & { image: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<GatsbyImageSharpFluid_WithWebpFragment> }> }> }
  )> };

export type ProjectsFragment = { edges: Array<{ node: (
      Pick<MarkdownRemark, 'excerpt'>
      & { fields: Maybe<Pick<MarkdownRemarkFields, 'slug'>>, frontmatter: Maybe<(
        Pick<Frontmatter, 'projectName'>
        & { image: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<GatsbyImageSharpFluid_WithWebpFragment> }> }> }
      )> }
    ) }> };

export type PostsFragment = { edges: Array<{ node: (
      Pick<MarkdownRemark, 'excerpt'>
      & { fields: Maybe<(
        Pick<MarkdownRemarkFields, 'slug'>
        & { readingTime: Maybe<Pick<MarkdownRemarkFieldsReadingTime, 'text'>> }
      )>, frontmatter: Maybe<(
        Pick<Frontmatter, 'templateKey' | 'blogTitle' | 'blogAuthor' | 'activitieTitle' | 'activitieType' | 'activitieLocation' | 'dateFormat' | 'date'>
        & { yearOnly: Frontmatter['date'], monthAndYear: Frontmatter['date'], dateTime: Frontmatter['date'], dateOnly: Frontmatter['date'], endYearOnly: Frontmatter['dateEnd'], endMonthAndYear: Frontmatter['dateEnd'], endDateTime: Frontmatter['dateEnd'], endDateOnly: Frontmatter['dateEnd'] }
      )> }
    ) }> };

export type IndexPageTemplateQueryVariables = {};


export type IndexPageTemplateQuery = { markdownRemark: Maybe<{ frontmatter: Maybe<Pick<Frontmatter, 'description'>> }>, mainHighlight: { edges: Array<{ node: Pick<MarkdownRemark, 'excerpt'>
        & HighlightFragment
       }> }, highlight2: { edges: Array<{ node: Pick<MarkdownRemark, 'excerpt'>
        & HighlightFragment
       }> }, highlight3: { edges: Array<{ node: Pick<MarkdownRemark, 'excerpt'>
        & HighlightFragment
       }> }, projects: ProjectsFragment, posts: PostsFragment };

export type MemberFragment = (
  Pick<MarkdownRemark, 'html' | 'excerpt'>
  & { frontmatter: Maybe<(
    Pick<Frontmatter, 'memberRole' | 'memberName' | 'memberSince' | 'memberUntil' | 'memberEmail' | 'memberLattes' | 'isFormerMember' | 'memberLinkedin'>
    & { memberUntilTimestamp: Frontmatter['memberUntil'] }
    & { image: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<GatsbyImageSharpFluid_WithWebpFragment> }> }>, memberOtherInfos: Maybe<Array<Pick<OtherInfos, 'info' | 'url' | 'label'>>>, memberFeaturedLink: Maybe<Pick<FeaturedLink, 'label' | 'url'>> }
  )> }
);

export type MemberCardFragment = (
  Pick<MarkdownRemark, 'id'>
  & { fields: Maybe<Pick<MarkdownRemarkFields, 'slug'>>, frontmatter: Maybe<(
    Pick<Frontmatter, 'memberRole' | 'memberName' | 'memberType' | 'memberLattes' | 'memberLinkedin' | 'isFormerMember'>
    & { memberUntilTimestamp: Frontmatter['memberUntil'] }
    & { image: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<GatsbyImageSharpFluid_WithWebpFragment> }> }>, memberFeaturedLink: Maybe<Pick<FeaturedLink, 'label' | 'url'>> }
  )> }
);

export type MemberPageByIdQueryVariables = {
  id: Scalars['String']
};


export type MemberPageByIdQuery = { markdownRemark: Maybe<MemberFragment>, projects: ProjectsFragment, projectsInWitchIsFormerMember: ProjectsFragment };

export type MembersIndexPageTemplateQueryVariables = {};


export type MembersIndexPageTemplateQuery = { markdownRemark: Maybe<{ frontmatter: Maybe<{ coordinators: Maybe<Array<Maybe<MemberCardFragment>>>, formerMembers: Maybe<Array<Maybe<MemberCardFragment>>> }> }>, members: { edges: Array<{ node: MemberCardFragment }> } };

export type ProjectPageByIdQueryVariables = {
  id: Scalars['String']
};


export type ProjectPageByIdQuery = { markdownRemark: Maybe<(
    Pick<MarkdownRemark, 'html' | 'excerpt'>
    & { frontmatter: Maybe<(
      Pick<Frontmatter, 'projectName' | 'projectStart' | 'projectEnd'>
      & { image: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<GatsbyImageSharpFluid_WithWebpFragment> }> }>, projectMembers: Maybe<Array<Maybe<MemberCardFragment>>>, projectFormerMembers: Maybe<Array<Maybe<MemberCardFragment>>> }
    )> }
  )>, posts: PostsFragment };

export type ResearchPageTemplateQueryVariables = {};


export type ResearchPageTemplateQuery = { markdownRemark: Maybe<{ frontmatter: Maybe<{ links: Maybe<Array<Pick<Links, 'name' | 'url'>>>, articles: Maybe<Array<(
        Pick<ResearchCard, 'description'>
        & { links: Maybe<Array<Pick<Links, 'name' | 'url'>>> }
      )>>, thesis: Maybe<Array<(
        Pick<ResearchCard, 'description'>
        & { links: Maybe<Array<Pick<Links, 'name' | 'url'>>> }
      )>>, books: Maybe<Array<(
        Pick<ResearchCard, 'description'>
        & { links: Maybe<Array<Pick<Links, 'name' | 'url'>>> }
      )>> }> }> };
