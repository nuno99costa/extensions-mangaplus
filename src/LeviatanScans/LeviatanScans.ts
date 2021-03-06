import {LanguageCode, SourceInfo, TagType} from "paperback-extensions-common";
import {Genkan} from '../Genkan'

const LEVIATANSCANS_DOMAIN = "https://leviatanscans.com"

export const LeviatanScansInfo: SourceInfo = {
    version: '1.0.0',
    name: 'LeviatanScans',
    description: 'Extension that pulls manga from leviatanscans.com',
    author: 'GameFuzzy',
    authorWebsite: 'http://github.com/gamefuzzy',
    icon: "icon.png",
    hentaiSource: false,
    websiteBaseURL: LEVIATANSCANS_DOMAIN,
    sourceTags: [
        {
            text: "Notifications",
            type: TagType.GREEN
        }
    ]
}

export class LeviatanScans extends Genkan {
    baseUrl: string = LEVIATANSCANS_DOMAIN
    languageCode: LanguageCode = LanguageCode.ENGLISH
}