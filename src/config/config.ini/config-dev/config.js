/**
 * Created by Jenson on 2020/08/12.
 */

var domainConfig = {
    pmCore:'https://mbdev-pettyb.pettyb.com/',  //【*】
    pmStorage:'https://mbdev-pettyb-storage.pettyb.com/',
    groupName:'dev_pz_pca_',
    baseUrl:'https://mbdev-purezen.pettyb.com/',
    baseUrlApi:'https://mbdev-purezen-api.pettyb.com/',
    AppNameAlias:'PartnerAdmin',
};

//验证机制
var Config = {
    /*Var*/
    'VLSAccessToken':domainConfig.groupName+'access_token',  /* Var localStorage*/
    'VLSAuthToken':domainConfig.groupName+'auth_token',
    'VLSClient':domainConfig.groupName+'mbcore_client',  /* Var localStorage*/
    'Mode':'development',/*默认是开发模式，如果是prodect即是产品模式*/
    /*Api*/
    'GrantTypeAccessToken':'client_credential',  //grant_type
    'AppAppid':'oZokhz16Eh2ckYFIghxGsBPdkAuoSnSp',  //appid oZokhz16Eh2ckYFIghxGsBPdkAuoSnSp
    'AppSecret':'1THIf7WQhlyTPpjxdYRnwbWDx0TkaPPO', //secret 1THIf7WQhlyTPpjxdYRnwbWDx0TkaPPO
    'AppChannel':'pcadmin',  // channel
    'AppGroupId':'8' //group_id
};

var AppUrl = {
    Index:domainConfig.baseUrl + 'PartnerAdmin/index.html',
    Login:domainConfig.baseUrl+'PartnerAdmin/login.html',
};

// Token、图片以及登录接口
var ApiUrl = {
    // 接口
    'getAccessToken': domainConfig.pmCore +'core/oauth/getAccessToken',
    'refreshAccessToken': domainConfig.pmCore +'core/oauth/refreshAccessToken',
    'getImageUri':domainConfig.pmStorage +'getImageUri',
    'getUploadImageToken':domainConfig.pmStorage +'getUploadImageToken',
    LoginApi:domainConfig.baseUrlApi + 'admin/partner/login', // 登录接口
};