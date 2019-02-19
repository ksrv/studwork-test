const { NODE_ENV, VUE_APP_API_URL } = process.env;
const DEVELOPMENT = 'development';
const PRODUCTION = 'production';


class Environment {
  // public
  get isDevelopment () {
    return NODE_ENV === DEVELOPMENT;
  }

  // public
  get isProduction () {
    return NODE_ENV === PRODUCTION;
  }

  // private
  get CurrentAPI () {
    return VUE_APP_API_URL;
  }
}

const Env = new Environment();

export default Env;
