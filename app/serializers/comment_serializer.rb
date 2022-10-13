class CommentSerializer < ActiveModel::Serializer
  attributes :description
  has_one :photo
end
