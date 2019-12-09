// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'commercio_doc.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

CommercioDoc _$CommercioDocFromJson(Map<String, dynamic> json) {
  return CommercioDoc(
    uuid: json['uuid'] as String,
    senderDid: json['sender'] as String,
    recipientDids:
        (json['recipients'] as List)?.map((e) => e as String)?.toList(),
    contentUri: json['content_uri'] as String,
    metadata: json['metadata'] == null
        ? null
        : CommercioDocMetadata.fromJson(
            json['metadata'] as Map<String, dynamic>),
    checksum: json['checksum'] == null
        ? null
        : CommercioDocChecksum.fromJson(
            json['checksum'] as Map<String, dynamic>),
    encryptionData: json['encryption_data'] == null
        ? null
        : CommercioDocEncryptionData.fromJson(
            json['encryption_data'] as Map<String, dynamic>),
  );
}

Map<String, dynamic> _$CommercioDocToJson(CommercioDoc instance) =>
    <String, dynamic>{
      'sender': instance.senderDid,
      'recipients': instance.recipientDids,
      'uuid': instance.uuid,
      'content_uri': instance.contentUri,
      'metadata': instance.metadata,
      'checksum': instance.checksum,
      'encryption_data': instance.encryptionData,
    };

CommercioDocMetadata _$CommercioDocMetadataFromJson(Map<String, dynamic> json) {
  return CommercioDocMetadata(
    contentUri: json['content_uri'] as String,
    schema: json['schema'] == null
        ? null
        : CommercioDocMetadataSchema.fromJson(
            json['schema'] as Map<String, dynamic>),
    schemaType: json['schema_type'] as String,
  );
}

Map<String, dynamic> _$CommercioDocMetadataToJson(
        CommercioDocMetadata instance) =>
    <String, dynamic>{
      'content_uri': instance.contentUri,
      'schema': instance.schema,
      'schema_type': instance.schemaType,
    };

CommercioDocMetadataSchema _$CommercioDocMetadataSchemaFromJson(
    Map<String, dynamic> json) {
  return CommercioDocMetadataSchema(
    uri: json['uri'] as String,
    version: json['version'] as String,
  );
}

Map<String, dynamic> _$CommercioDocMetadataSchemaToJson(
        CommercioDocMetadataSchema instance) =>
    <String, dynamic>{
      'uri': instance.uri,
      'version': instance.version,
    };

CommercioDocChecksum _$CommercioDocChecksumFromJson(Map<String, dynamic> json) {
  return CommercioDocChecksum(
    value: json['value'] as String,
    algorithm: _$enumDecodeNullable(
        _$CommercioDocChecksumAlgorithmEnumMap, json['algorithm']),
  );
}

Map<String, dynamic> _$CommercioDocChecksumToJson(
        CommercioDocChecksum instance) =>
    <String, dynamic>{
      'value': instance.value,
      'algorithm': _$CommercioDocChecksumAlgorithmEnumMap[instance.algorithm],
    };

T _$enumDecode<T>(
  Map<T, dynamic> enumValues,
  dynamic source, {
  T unknownValue,
}) {
  if (source == null) {
    throw ArgumentError('A value must be provided. Supported values: '
        '${enumValues.values.join(', ')}');
  }

  final value = enumValues.entries
      .singleWhere((e) => e.value == source, orElse: () => null)
      ?.key;

  if (value == null && unknownValue == null) {
    throw ArgumentError('`$source` is not one of the supported values: '
        '${enumValues.values.join(', ')}');
  }
  return value ?? unknownValue;
}

T _$enumDecodeNullable<T>(
  Map<T, dynamic> enumValues,
  dynamic source, {
  T unknownValue,
}) {
  if (source == null) {
    return null;
  }
  return _$enumDecode<T>(enumValues, source, unknownValue: unknownValue);
}

const _$CommercioDocChecksumAlgorithmEnumMap = {
  CommercioDocChecksumAlgorithm.MD5: 'md5',
  CommercioDocChecksumAlgorithm.SHA1: 'sha-1',
  CommercioDocChecksumAlgorithm.SHA224: 'sha-224',
  CommercioDocChecksumAlgorithm.SHA384: 'sha-384',
  CommercioDocChecksumAlgorithm.SHA512: 'sha-512',
};

CommercioDocEncryptionData _$CommercioDocEncryptionDataFromJson(
    Map<String, dynamic> json) {
  return CommercioDocEncryptionData(
    keys: (json['keys'] as List)
        ?.map((e) => e == null
            ? null
            : CommercioDocEncryptionDataKey.fromJson(e as Map<String, dynamic>))
        ?.toList(),
    encryptedData:
        (json['encrypted_data'] as List)?.map((e) => e as String)?.toList(),
  );
}

Map<String, dynamic> _$CommercioDocEncryptionDataToJson(
        CommercioDocEncryptionData instance) =>
    <String, dynamic>{
      'keys': instance.keys,
      'encrypted_data': instance.encryptedData,
    };

CommercioDocEncryptionDataKey _$CommercioDocEncryptionDataKeyFromJson(
    Map<String, dynamic> json) {
  return CommercioDocEncryptionDataKey(
    recipientDid: json['recipient'] as String,
    value: json['value'] as String,
  );
}

Map<String, dynamic> _$CommercioDocEncryptionDataKeyToJson(
        CommercioDocEncryptionDataKey instance) =>
    <String, dynamic>{
      'recipient': instance.recipientDid,
      'value': instance.value,
    };