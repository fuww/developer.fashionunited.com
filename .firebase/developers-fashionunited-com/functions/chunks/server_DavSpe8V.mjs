import { getApps, initializeApp, cert } from 'firebase-admin/app';

const activeApps = getApps();
const serviceAccount = {
  type: "service_account",
  project_id: "developers-fashionunited-com",
  private_key_id: "35f1ed6dbe93ed64f8458f4eb84ad2b6f590acb4",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCzaFIRr6+0J/x5\nGAauI40jux/IH7+SQe6EhUZf916eRaAkMXmrmQ0BSIINHQCcHw1ZwoTmH6FcYrWb\nzxcHyPov/Eiq/E88IpbV+JAhZuCRcbqDF3sNTq4oKvWCz+RhtYrywUIhmDOrv6q5\n3X1QWpGIiqCOLSbB/lekrXe+RZnMIQWrXIyxgffnjcJVIRErCw8/luDyb5vxphOV\nC9sDAm4Qie+4v4SCoUpTuCunHaNVdkL/cilizmQmeMbIh1LWtSNoH3J+rFE8TizH\n12/pnumNcjxFP2UL1zjW8nbyKAz1bGNmbxPHfeRnZlKagtoqCRCCzj8FNCmuDzak\nZPjfeZDdAgMBAAECggEAGDvUrh/pn2+xSlgk+tvBglyR5/Hl6icuxUbNYUQkS0PD\nZHAsa7HyUESPkJ7kyLHnF0NPuVf3b2fD+UZpaXtL1DSDSllniItxjXiUW3auiebv\nVyrSS9NfcfyPijpzsoEXwj+5o5kQDbiHorCY70Q0mVmEY4AU1qp5Az0NSi3Tnv9y\nutK6P1trNd1h/jVFg3+B1VYsKRQwqHv/2NPQVc5B2PJhFunnEyIVp46nqVCwWgrX\nNNGchTihH0ZQlSqV4kpLir/agyddK2VncWbF/iACCRY9dBK5V9TPPRertI97j6zb\nltpHwGl8zZRRiIA9B9yq6SCesHLOY8tjLafZwXCuLwKBgQDsmi0HMAnHscmHGXnD\nZHLL8TZSZu6CjFQ8O9zP5lpP6WWI7d9r0+3T/I3pj5bGgpPsagndlWZGkS4lUFnz\nlg++qM462uvEXakRXbOImbwUEi0o37tHg4uzn6WV7fLsltj/FkRuxFqaCiZTVep0\nCv4XTm7X8Ihz76FgpLgTF+Ah8wKBgQDCHbzJKGkXSeQagl2kbAHgsvDQ9pQ1GDRK\nnz+UfDqzXalHzEc0i1RIlmaPpuErfVLS06yIn2D2eUzj98KiA6M3DhRZ3UY+vTpF\n1DxMnbhKUtHKnUexXJDkwDAnhviVEKSem0V6UrqSH5BFdUWElXjtf6HC3Z/uLNiL\nqavYORdl7wKBgDEve9zap63Tz8k+CooL/7FV260VqM+KzJgY+bZedLfYFTt599A6\npl5DSl0bdISf8JBdGt/thu10kNtA8PIqZ+uCvByQFiMkNVle2Uu0adziSnEM0an0\nNr6ImaupY667TTD6OA+u0gbjxUPdwHePMXM24uQRJMy1LB8jHwEZHYbxAoGATl6p\nKGGbRB697AH0AnzkqS41UXgrz9/MxM/UYINjQ6UtweH0YX9a8M9f6uFKCT/Yn2t8\nPdBy2i+Q3nzZ5IUpcQHLL5jJUm0dSLHuAlSu4brcHjwvhKjFisUY6+xvEeedPreb\nbk5WKsZ5fcFh5qxeHSypRz4o4oTSjFhdG7e4/ZsCgYEAjRs7yDlkd56qL+BKRzT+\norcE2UsasK5wYdS/d+rIp/UKkrStfFAIxxFA6d04D2rnHg45rXZgNFStftJO7VQo\nzGjpTKOzgqsWpw1Zyp/qo5Nzqh7F/ad6OWxM/L3vkI6cpiSdpYCE8G7FQPBaD9B3\ntA+aG/pc7YYpYJ+qiJ/KDGs=\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-2du5f@developers-fashionunited-com.iam.gserviceaccount.com",
  client_id: "117797854546488251846",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-2du5f%40developers-fashionunited-com.iam.gserviceaccount.com"
};
const initApp = () => {
  console.info("Loading service account from env.");
  return initializeApp({
    credential: cert(serviceAccount)
  });
};
const app = activeApps.length === 0 ? initApp() : activeApps[0];

export { app as a };
