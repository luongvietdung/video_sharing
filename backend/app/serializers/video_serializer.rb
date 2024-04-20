class VideoSerializer
  include JSONAPI::Serializer

  attributes :src, :title, :description
end
