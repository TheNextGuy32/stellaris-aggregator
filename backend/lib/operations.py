
import glob 
import os
import yaml
import json
from pprint import pprint

from . import eventSerializer as serializer
from . import larkParser as parser

def GetFilenamesInFolder(directoryPath):
    eventFilepaths = glob.glob (os.path.join (directoryPath, "*.txt"))
    return [eventFilepath for eventFilepath in eventFilepaths]

def GetLocalizationContentsInFolder(localizationDirectorypath):
    localizationYamlPattern = os.path.join(localizationDirectorypath,"*.yml")
    localizationFilepaths = glob.glob(localizationYamlPattern)
    
    localizations = {}
    for localizationFilepath in localizationFilepaths:
        with open(localizationFilepath, 'r', encoding='utf-8-sig') as stream:
            try:
                print("Loading %s..." % localizationFilepath)
                localizationContent = yaml.load(stream, Loader=yaml.FullLoader)["l_english"]
                localizations.update(localizationContent)
                
            except yaml.YAMLError as exc:
                print(exc)
                
    return localizations

def GetLocalizationContentsFromFile(localizationFilepath):
    with open(localizationFilepath, 'r', encoding="utf-8-sig") as stream:
        try:
            print("Loading %s..." % localizationFilepath)
            return yaml.load(stream, Loader=yaml.FullLoader)["l_english"]
        except yaml.YAMLError as exc:
            print(exc)

def LoadStellarisFile(filepath):
    parsedObject = parser.ParseEventFile(filepath)
    filename = os.path.splitext(os.path.basename(filepath))[0]
    return serializer.ConvertParsedToJson(parsedObject, filename)

def ReadConversationsInFolder (directoryPath):
    conversationsPattern = os.path.join(directoryPath,"*.json")
    conversationFiles = glob.glob(conversationsPattern)
    conversations = []

    for conversationFile in conversationFiles:
        with open(conversationFile, 'r') as jsonFile:
            loadedConversation = json.load(jsonFile)
            conversations.append(loadedConversation)

    return conversations
