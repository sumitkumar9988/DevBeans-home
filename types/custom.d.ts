declare global {
    interface Window {
      gbwawc: {
        url: string,
        options: {
          waId: string,
          siteName: string,
          siteTag: string,
          siteLogo: string,
          widgetPosition: string,
          triggerMessage: string,
          welcomeMessage: string,
          brandColor: string,
          messageText: string,
          replyOptions: string[],
        },
      };
    }
  }
  
  export {};
  