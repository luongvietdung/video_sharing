class NotificationShareVideoJob < ApplicationJob
  def perform(user, video)
    NotificationChannel.broadcast_to('general', { message: "New video shared by #{user.email}", data: VideoSerializer.new(video) })
  end
end
