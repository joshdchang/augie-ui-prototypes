import { gql } from '@apollo/client'

export const LOAD_AUGIES = gql`
  query {
    getAugies{
      id,
      name,
      slots,
      assetTypes,
      transitionTypes,
      slotEffects,      
      workflowStatus,
      downloadUrl,
      uploads{
        fileName,
        mime,
        uploadDate
      }
    }
  }
`

export const SAVE_AUGIE = gql`
  mutation createAugie($input: AugieInput!) {
    createAugie(input: $input)
  }
`

export const EDIT_AUGIE_INPUT = gql`
  query augieEditInput($input: String!) {
    augieEditInput(input: $input){
      durationInFrames,
      fps,
      width,
      height,
      audioURL,
      videoURL,
      displayResolutionName,
      transcription,
      slotsInterval,
      workflowStatus,
      augieName,
      useInPip,
      slots{
        id,
        assetTypes,
        slotEffect,
        startSeconds,
        endSeconds,
        transitionTypes,
        contentUrl,
        width,
        height,
        renderType,
        searchText,
        text,
        textKey,
        textTiming{
          text,
          startTime,
          endTime
        }
      }
    }
  }
`

export const SHUFFLE_SLOT = gql`
  query shuffleSlotAsset($augieID: String!, $textKey: String!, $contentURL: String!, $slot: String!) {
    shuffleSlotAsset(augieID: $augieID, textKey: $textKey, contentURL: $contentURL, slot: $slot)
  }
`

export const DOWNLOAD_VIDEO = gql`
  query downloadVideo($augieID: String!) {
    downloadVideo(augieID: $augieID)
  }
`

export const SAVE_EDITS = gql`
  mutation saveEdits($input: String!, $augieID: String!) {
    saveEdits(input: $input, augieID: $augieID)
  }
`

export const CHANGE_SEARCH_TEXT = gql`
  mutation changeSearchText($augieID: String!, $searchText: String!, $slot: String!) {
    changeSearchText(augieID: $augieID, searchText: $searchText, slot: $slot)
  }
`

export const DELETE_AUGIE = gql`
  mutation deleteAugie($augieID: String!) {
    deleteAugie(augieID: $augieID)
  }
`

export const CHANGE_SLOT_INTERVAL = gql`
  mutation changeSlotsInterval($augieID: String!, $newInterval: Float!) {
    changeSlotsInterval(augieID: $augieID, newInterval: $newInterval)
  }
`

export const REPLACE_WITH_KEY_ART = gql`
  mutation replaceWithKeyArt($augieID: String!, $slot: String!) {
    replaceWithKeyArt(augieID: $augieID, slot: $slot)
  }
`

export const RENAME_AUGIE = gql`
  mutation renameAugie($augieID: String!, $newName: String!) {
    renameAugie(augieID: $augieID, newName: $newName)
  }
`

export const EDIT_ASSET_TYPES = gql`
  mutation editAssetTypes($assetTypes: String!, $slotID: String!) {
    editAssetTypes(assetTypes: $assetTypes, slotID: $slotID)
  }
`

export const EDIT_SLOT_EFFECT = gql`
  mutation editSlotEffect($slotEffect: String!, $slotID: String!) {
    editSlotEffect(slotEffect: $slotEffect, slotID: $slotID)
  }
`

export const EDIT_SLOT_SOURCE = gql`
  mutation editSlotSource($contentUrl: String!, $slotID: String!) {
    editSlotSource(contentUrl: $contentUrl, slotID: $slotID)
  }
`

export const UPDATE_SLOTS = gql`
  mutation updateSlots($input: UpdateSlots!) {
    updateSlots(input: $input){
      durationInFrames,
      fps,
      width,
      height,
      audioURL,
      displayResolutionName,
      transcription,
      slotsInterval,
      workflowStatus,
      augieName,
      slots{
        id,
        assetTypes,
        slotEffect,
        startSeconds,
        endSeconds,
        transitionTypes,
        contentUrl,
        width,
        height,
        renderType,
        searchText,
        text,
        textKey,
        textTiming{
          text,
          startTime,
          endTime
        }
      }
    }
  }
`