"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadAssetPostApi = void 0;
var db_recipes_1 = require("db-recipes");
var fs_util_1 = require("fs-util");
var model_types_1 = require("model-types");
var getTemporaryAssetsFolderPath_1 = require("./getTemporaryAssetsFolderPath");
var asset_functions_js_1 = require("asset-functions-js");
var convertToMp3_1 = require("./convertToMp3");
/**
 * Uploads an asset to the server, and puts it in a temporary location in the assets folder of `function-server`. It returns the filename of the file in the temporary location.
 *
 * It can only be accessed through that random name. This random name has 32 characters so cannot be easily guessed. This should be secure enough. The file should be moved to the final destination in the actual function that needs the file.
 */
var uploadAssetPostApi = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var authToken, isAuthed, file, realFile, functionFile, randomName, temporaryAssetsFolderPath, extension, temporaryFileName, absoluteTemporaryDestinationPath, resultingPath;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                authToken = ctx.data.authToken;
                isAuthed = (0, db_recipes_1.functionAuthPlugin)("uploadAsset", authToken);
                if (!isAuthed) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            isUnauthorized: true,
                            message: "You can only do this when authenticated",
                        }];
                }
                file = ctx.files.file;
                if (!file) {
                    return [2 /*return*/, { isSuccessful: false, message: "No file found" }];
                }
                realFile = (Array.isArray(file)
                    ? file[0]
                    : file);
                functionFile = {
                    size: realFile.size,
                    path: realFile.path,
                    name: realFile.name,
                    type: realFile.type,
                };
                randomName = (0, model_types_1.generateRandomString)(32);
                temporaryAssetsFolderPath = (0, getTemporaryAssetsFolderPath_1.getTemporaryAssetsFolderPath)();
                extension = (0, asset_functions_js_1.getPreferredExtensionFromType)(realFile.type);
                if (!extension) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "couldn't figure out what you're trying to upload",
                        }];
                }
                temporaryFileName = "".concat(randomName, ".").concat(extension);
                absoluteTemporaryDestinationPath = fs_util_1.path.join(temporaryAssetsFolderPath, temporaryFileName);
                if (!!fs_util_1.fs.existsSync(temporaryAssetsFolderPath)) return [3 /*break*/, 2];
                return [4 /*yield*/, fs_util_1.fs.mkdir(temporaryAssetsFolderPath, { recursive: true })];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                if (!(extension === "mp3")) return [3 /*break*/, 4];
                return [4 /*yield*/, (0, convertToMp3_1.convertToMp3)(functionFile.path, absoluteTemporaryDestinationPath)];
            case 3:
                resultingPath = _a.sent();
                return [3 /*break*/, 6];
            case 4: return [4 /*yield*/, fs_util_1.fs.rename(functionFile.path, absoluteTemporaryDestinationPath)];
            case 5:
                _a.sent();
                _a.label = 6;
            case 6: return [2 /*return*/, {
                    isSuccessful: true,
                    message: "File received",
                    temporaryDestination: temporaryFileName,
                }];
        }
    });
}); };
exports.uploadAssetPostApi = uploadAssetPostApi;
//# sourceMappingURL=uploadAssetPostApi.js.map