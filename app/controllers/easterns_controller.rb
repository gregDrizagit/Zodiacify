class EasternsController < ApplicationController
  def index
    @chinesehoroscope = ChineseHoroscope.all
    render json: @chinesehoroscope
  end
  def create
    @chinesehoroscope = ChineseHoroscope.create
    render json: @chinesehoroscope
  end

  def show
    @chinesehoroscope = ChineseHoroscope.find(params[:id])
    render json: @chinesehoroscope
  end


  private
  def chinese_params
    params.require(:chinesehoroscope).permit(:name, :description, :lucky_number, :lucky_color, :img_url)
  end
end
