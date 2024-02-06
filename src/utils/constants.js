
export const  LOGO_URL ="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" ;

export const USER_URL ="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const BG_URL="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"

export const API_OPTIONS  = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjQ1ZGQ3NjdiMDY5ZTg3Y2JlM2E4Mzc2OTUxMWE5MiIsInN1YiI6IjY1YmE2NGY4ZTlkYTY5MDE2MmY0YzUxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pH44rFNt9A6lS_t57IzGmb-UXiOi51RPYCefI5I-BjA',
    }
  };

  export const IMG_CDN_URL ="https://image.tmdb.org/t/p/w500"

  export const OPENAI_KEY= process.env.REACT_APP_OPENAI_KEY

  export const SUPPORTED_LANGUAGES = [
    {identifier:"en",name:"English"},
    {identifier:"tam",name:"Tamil"},
    {identifier:"hindi",name:"Hindi"},
    {identifier:"telugu",name:"Telugu"},
    {identifier:"french",name:"French"}
  ]