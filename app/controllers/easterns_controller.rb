class EasternsController < ApplicationController
  def index
    @eastern = Eastern.all
    render json: @eastern
  end
  def create
    @eastern = Eastern.create
    render json: @eastern
  end

  def show
    @eastern = Eastern.find(params[:id])
    render json: @eastern
  end


  private
  def chinese_params
    params.require(:eastern).permit(:name, :description, :lucky_number, :lucky_color, :img_url)
  end
end
